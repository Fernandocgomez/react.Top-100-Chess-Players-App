from pandas import DataFrame
import requests
from bs4 import BeautifulSoup
import time
from selenium import webdriver

playersUrl = []

driver = webdriver.Firefox(executable_path='/Users/mackbook/Desktop/project-chess/geckodriver')

# driver = webdriver.Chrome('/Users/mackbook/Desktop/project-chess/chromedriver')
page = driver.get('https://ratings.fide.com/')
page = driver.execute_script('return document.documentElement.outerHTML')
soup = BeautifulSoup(page, "html.parser")
topRatingDiv = soup.find(id='top_rating_div')
aElements = topRatingDiv.findAll('a')
for i in aElements:
    a = i.get('href')
    playersUrl.append(a)

driver.quit()

# print(soup)

# picture = []
name = []
worldrank = []
country = []
birthyear = []
sex = []
title = []

for i in playersUrl: 

    driver = webdriver.Firefox(executable_path='/Users/mackbook/Desktop/project-chess/geckodriver')
    # driver = webdriver.Chrome('/Users/mackbook/Desktop/project-chess/chromedriver')
    driver.get('https://ratings.fide.com{}'.format(i))
    # driver.get('https://ratings.fide.com/profile/1503014')
    page = driver.execute_script('return document.documentElement.outerHTML')
    soup = BeautifulSoup(page, "html.parser")
    # main container
    rownogutters = soup.find(class_='row no-gutters')
    # get the players picture
    # imgSrc = rownogutters.find('img').get('src')
    # picture.append(imgSrc)
    # get players name
    findName = rownogutters.find(class_='col-lg-8 profile-top-title').text
    name.append(findName)
    # get all the values on the table to later grab them by their index
    findAllValuesOnTable = rownogutters.findAll(class_='profile-top-info__block__row__data')
    # get worldrank
    worldrank.append(findAllValuesOnTable[0].text)
    # get country
    country.append(findAllValuesOnTable[1].text)
    # get birthyear
    birthyear.append(findAllValuesOnTable[3].text)
    # get sex
    sex.append(findAllValuesOnTable[4].text)
    # get title
    title.append(findAllValuesOnTable[5].text)

    driver.quit()

    if len(name) == 2: 
        break

# print(picture)
# print(name)
# print(worldrank)
# print(country)
# print(birthyear)
# print(sex)
# print(title)

Data = {"name": name, "worldrank": worldrank, "country": country, "birthyear": birthyear, "sex": sex, "title": title}
df = DataFrame(Data, columns=["name", "worldrank", "country", "birthyear", "sex", "title"])
# print(df)
Export = df.to_csv("chessplayers.csv")







