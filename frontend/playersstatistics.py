from pandas import DataFrame
from bs4 import BeautifulSoup
from selenium import webdriver
import time

playersUrl = []

# driver = webdriver.Firefox(executable_path='/Users/mackbook/Desktop/project-chess/geckodriver')

driver = webdriver.Firefox(executable_path='/Users/mackbook/Desktop/project-chess/geckodriver')
page = driver.get('https://ratings.fide.com/')
page = driver.execute_script('return document.documentElement.outerHTML')
soup = BeautifulSoup(page, "html.parser")
topRatingDiv = soup.find(id='top_rating_div')
aElements = topRatingDiv.findAll('a')
for i in aElements:
    a = i.get('href')
    playersUrl.append(a)

driver.quit()

period = []
position = []
player_id = []
playerId = 0
for item in playersUrl:
    driver = webdriver.Firefox(executable_path='/Users/mackbook/Desktop/project-chess/geckodriver')
    driver.get('https://ratings.fide.com{}'.format(item))
    topListBtn = driver.find_element_by_id('top_records_button')
    topListBtn.click()
    time.sleep(3)
    page = driver.execute_script('return document.documentElement.outerHTML')
    soup = BeautifulSoup(page, "html.parser")

    period2 = []

    playerId = playerId + 1
    

    topRecordsDiv = soup.find(id='top_records_div')
    tbody = topRecordsDiv.find('tbody')

    array = []

    array.append(tbody)

    td = array[0].findAll('td')

    # td = soup.findAll('td')

    periodTd = td[0::6]
    positionTd = td[1::6]

    for i in periodTd: 
        noHTML = i.get_text()
        period.append(noHTML)

    for i in positionTd: 
        noHTML2 = i.get_text()
        position.append(noHTML2)

    for i in periodTd: 
        noHTML = i.get_text()
        period2.append(noHTML)

    for i in range(len(period2)):
        player_id.append(playerId)

    driver.quit()

    # if playerId == 2:
    #     break


# print(len(period))
# print(len(position))
# print(len(player_id))


Data = {"chessplayer_id": player_id, "period": period, "position": position}
df = DataFrame(Data, columns=["chessplayer_id", "period", "position"])
# print(df)
Export = df.to_csv("stats.csv")






