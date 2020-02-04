from pandas import DataFrame
import requests
from bs4 import BeautifulSoup

array = [1,2,3,4]
pictures = []

page = requests.get('https://www.chess.com/players?page=4') 
page.text  
soup = BeautifulSoup(page.text, "html.parser")
imges = soup.find_all(class_='post-author-thumbnail')

for i in imges:
    single = i.get('src')
    pictures.append(single)
    if len(pictures) == 4: 
        break

for i in imges[4:]: 
    single = i.get('data-src')
    pictures.append(single)

Data = {"img": pictures}

df = DataFrame(Data, columns=["img"])

Export = df.to_csv("pictures4.csv")