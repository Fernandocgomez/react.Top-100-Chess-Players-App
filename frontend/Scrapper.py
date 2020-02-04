from pandas import DataFrame
import requests
from bs4 import BeautifulSoup
import time
from selenium import webdriver
from selenium.webdriver.support.select import Select

# get all players url
playersUrl = []

page = requests.get('https://www.wsop.com/m/results/?aid=2&grid=1622&tid=17298&dayof=7651')
page.text
soup = BeautifulSoup(page.text, 'html.parser')
tableIdStatsbracelets = soup.find(id='results-main')
aElements = tableIdStatsbracelets.findAll('a')
for i in aElements:
    a = i.get('href')
    playersUrl.append(a)
    if len(playersUrl) == 2: 
        break
    


# Get players information
playerName = []
bracelets = []
earnings = [] 
picture = []

for i in playersUrl: 
    page = requests.get('https://www.wsop.com{}'.format(i))
    page.text
    soup = BeautifulSoup(page.text, "html.parser")
    iRightContent = soup.find(class_='iRightContent')
    iLeft = soup.find(class_='iLeft')
    imgIlfet = iLeft.find('img').get("src")
    picture.append(imgIlfet)
    h3Name = iRightContent.find('h3').text
    tableInfo = soup.find(id='dtPlayers')
    playerName.append(h3Name)
    trBracelets = iRightContent.find('tr')
    bBracelets = trBracelets.findAll('b')
    bracelets.append(bBracelets[0].text)
    earnings.append(bBracelets[3].text)

print(playerName)
print(bracelets)
print(earnings)
print(picture)

# Get players torunuments info
event = []
buying = []
date = []
place = []
eraningForThatEvent = []
player_id = []
playerId = 0
for i in playersUrl: 
    driver = webdriver.Chrome('/Users/mackbook/Desktop/Python-scrapper /chromedriver')
    driver.get('https://www.wsop.com{}'.format(i))
    eraningForThatEventt = []
    
    playerId = playerId + 1

    select_fr = Select(driver.find_element_by_name("dtPlayers_length"))
    select_fr.select_by_index(2)
    page = driver.execute_script('return document.documentElement.outerHTML')
    soup = BeautifulSoup(page, "html.parser")

    tableInfo = soup.find(id='dtPlayers')

    tEvent = tableInfo.findAll(class_='dtEvent')
    for item in tEvent:
        event.append(item.text)

    tBuying = tableInfo.findAll('small')
    for item in tBuying:
        buying.append(item.text)

    tDate = tableInfo.findAll(class_='sorting_1')
    for item in tDate:
        date.append(item.text)

    allRows = tableInfo.findChildren(role='row')
    for i in allRows[1:]:    
        x = i.findAll('td')[3]
        place.append(x.text)

    allRows = tableInfo.findChildren(role='row')
    for i in allRows[1:]:    
        x = i.findAll('td')[4]
        eraningForThatEvent.append(x.text)

    allRows = tableInfo.findChildren(role='row')
    for i in allRows[1:]:    
        x = i.findAll('td')[4]
        eraningForThatEventt.append(x.text)

    for i in range(len(eraningForThatEventt)):
        player_id.append(playerId)

    driver.quit()

print(event)
print(buying)
print(date)
print(place)
print(eraningForThatEvent)
print(player_id)

Data = {"tevent": event, "tbuying": buying, "tdate": date, "tplacement": place, "tearnings": eraningForThatEvent, "player_id": player_id}
df = DataFrame(Data, columns=["tevent", "tbuying", "tdate", "tplacement", "tearnings", "player_id"])
# print(df)
Export = df.to_csv("tournaments.csv")

Data = {"pname": playerName, "pbracelets": bracelets, "ptotalearnings": earnings, "ppicture": picture}
df = DataFrame(Data, columns=["pname", "pbracelets", "ptotalearnings", "ppicture"])
# print(df)
Export = df.to_csv("players.csv")
