from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from dotenv import load_dotenv
from io import StringIO
from pathlib import Path
import pandas as pd
import os
import time
import re

#Website to gather information on all players in the Premier League.
website = 'https://fbref.com/en/comps/9/stats/Premier-League-Stats'

#Reads from the .env all key-value pairs.
load_dotenv()

#Gets the value from the CHROME_DRIVER_PATH pair from the .env 
chrome_driver_path = os.getenv("CHROME_DRIVER_PATH")
#If no value from the pair is returned, an exception is thrown.
if not chrome_driver_path:
    raise Exception("CHROME_DRIVER_PATH not found in .env file.")

#Stores the path value of the Chrome Driver in driver_path.
driver_path = Path(chrome_driver_path)
#If the chrome driver not found in the path location then an exception is thrown.
if not driver_path:
    raise Exception("Chrome Driver not found at: {driver_path}")

#Sets up the ChromeDriver service by telling Selenium, the exact location 
#of the ChromeDriver to use when launching the browser.
service = Service(executable_path=str(driver_path))

#Creates new Options variables which launches the browser into headless mode.
#This is so when the program is ran, the browser does not pop up when ran, making the program more seamless.
chrome_options = Options()
chrome_options.add_argument("--headless=new")

#Loads up the Chrome browser with the loaded in Service and Options variables.
driver = webdriver.Chrome(service=service, options=chrome_options)
#Loads up the website from the FBRef website as stored above.
driver.get(website)
#The program sleeps for 10 seconds so that everything can properly load up.
time.sleep(10)

#Gathers all of the HTML from the FBRef website.
html = driver.page_source
#Closes the Chrome Browser.
driver.quit()

#Finds all blocks of comments in the HTML and stores them in a list.
comments = re.findall(r'<!--(.*?)-->', html, re.DOTALL)
#Then it goes through every comment block and the first table that has the 
#id of 'stats_standard', if there are no comments with stats_standard then it returns None.
players_table = next((c for c in comments if 'id="stats_standard"' in c), None)
#Throws exception if players_table is None.
if not players_table:
    raise Exception("Table not found in Web Page")

#Then it creates a Data Frame using the players_table HTML.
df = pd.read_html(StringIO(players_table))[0]
#Removes the top row of the table as it contains unnamed column names which are unneeded.
df.columns = df.columns.get_level_values(1)
#Removes the 'Rk' column as it is unneeded as all players have indexs anyways.
df = df.drop('Rk', axis=1)
#Removes any rows where the first column's value equals the column name,
#cleaning any unnecessary rows and resets the index.
df = df[df[df.columns[0]] != df.columns[0]].reset_index(drop=True)
#Removes the lowercase version of the nationality as it is unnecessary,
#for example, eng ENG would just ENG.
df.iloc[:, 1] = df.iloc[:, 1].astype(str).apply(lambda x: re.sub(r'[^A-Z]', '', x))
#Removes the last 10 rows of the database as they are unneeded.
df = df.iloc[:, :25]

#Saves the data frame to a csv file to be used for the Spring Boot part of the application.
df.to_csv('players.csv')
#Confirmation Message.
print("Table has successfully been converted to players.csv!")