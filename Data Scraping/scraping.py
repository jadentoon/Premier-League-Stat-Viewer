from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from dotenv import load_dotenv
from io import StringIO
from pathlib import Path
import pandas as pd
import os
import time
import sys
import re

website = 'https://fbref.com/en/comps/9/stats/Premier-League-Stats'

load_dotenv()

chrome_driver_path = os.getenv("CHROME_DRIVER_PATH")
if not chrome_driver_path:
    print("CHROME_DRIVER_PATH not found in .env file.")
    sys.exit()

driver_path = Path(chrome_driver_path)
if not driver_path:
    print("Chrome Driver not found at: {driver_path}")
    sys.exit()

service = Service(executable_path=str(driver_path))

chrome_options = Options()
chrome_options.add_argument("--headless=new")

driver = webdriver.Chrome(service=service, options=chrome_options)
driver.get(website)
time.sleep(10)

html = driver.page_source
driver.quit()

comments = re.findall(r'<!--(.*?)-->', html, re.DOTALL)
players_table = next((c for c in comments if 'id="stats_standard"' in c), None)
if not players_table:
    raise Exception("Table not found in Web Page")

df = pd.read_html(StringIO(players_table))[0]
df.columns = df.columns.get_level_values(1)
df = df.drop('Rk', axis=1)
df = df[df[df.columns[0]] != df.columns[0]].reset_index(drop=True)
df.iloc[:, 1] = df.iloc[:, 1].astype(str).apply(lambda x: re.sub(r'[^A-Z]', '', x))

df.to_csv('players.csv')
print("Table has successfully been converted to players.csv!")