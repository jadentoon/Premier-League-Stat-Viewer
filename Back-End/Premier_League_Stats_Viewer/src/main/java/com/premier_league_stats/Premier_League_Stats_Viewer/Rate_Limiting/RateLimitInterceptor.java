package com.premier_league_stats.Premier_League_Stats_Viewer.Rate_Limiting;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Bucket4j;
import io.github.bucket4j.Refill;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class RateLimitInterceptor implements HandlerInterceptor {

    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    private Bucket newBucket() {
        Refill refill = Refill.greedy(50, Duration.ofMinutes(1));
        Bandwidth limit = Bandwidth.classic(50, refill);
        return Bucket.builder().addLimit(limit).build();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String clientIp = request.getRemoteAddr();
        Bucket bucket = buckets.computeIfAbsent(clientIp, k -> newBucket());

        if (bucket.tryConsume(1)){
            return true;
        } else {
            response.setStatus(429);
            response.getWriter().write("Rate limit exceeded. Try again later");
            return false;
        }
    }
}
