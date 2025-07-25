#Note - need to get an API Key for api.football-data.org to run this code.
#Get API Key here https://www.football-data.org/client/register

import requests
import os
import requests
import time
import json
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")
url = "https://api.football-data.org/v4/competitions/PL/teams?season=2024"
headers = { 'X-Auth-Token': API_KEY }

# Fetch all teams in one request
response = requests.get(url, headers=headers)
data = response.json()

badge_folder_path = "../Front-End/Premier League Stat Viewer/public/Clubs"
os.makedirs(badge_folder_path, exist_ok=True)

teams_data = []

for team in data["teams"]:
    name = team["name"].replace(" ", "_")
    logo_url = team["crest"]

    print(f"Downloading {name} logo from {logo_url}")
    img_data = requests.get(logo_url).content

    ext = ".svg" if logo_url.endswith(".svg") else ".png"
    with open(f"{badge_folder_path}/{name}{ext}", "wb") as f:
        f.write(img_data)

    teams_data.append({
        "name": team["name"],
        "badge": f"/Clubs/{name}{ext}"
    })

    time.sleep(1)

print("All Premier League team badges successfully downloaded!")

json_file_path = "../Front-End/Premier League Stat Viewer/src/data/clubs.json"
with open(json_file_path, "w", encoding="UTF-8") as f:
    json.dump(teams_data, f, indent=4)

print("JSON file has been saved successfully!")