Thinkful (https://www.thinkful.com) Unit 1 Portfolio Exercise - jQuery app integrating with the Aviasales Travelpayouts Price map API (https://support.travelpayouts.com/hc/en-us/articles/203755406-Price-Map-API).

Background 

Idea behind was to create an app which will help to decide where to spend the vacation or just the weekend on a budget. As the airplane tickets is often 30-40% of the trip cost it's always interesting to know which destination is the cheapest and how much the flight costs. Not all flight metasearch engines have such functionality - majority of them just show you the best deals from point A to point B, but what if you don't know which B you want to choose?


Use case

Imagine that you have a weekend ahead and you want to escape your city: you don't want to spend huge amount of money and you want to estimate which direction is the cheapest. However, searching option after option from your head in the flight metasearch engine can take your lifetime, while this app will give you all precise prices in few clicks.

Functionality

* User can choose the city from which he wants to fly (in IATA format) and date of the flight - this is enough for a price search
* Pulls out data from Aviasales/Jetradar flight metasearch engine (http://www.jetradar.com/flights/) via Travelpayouts API
* Converts prices from Russian Rubles to US Dollars (as API's initial currency is Ruble)
* Can show from 25-100 flights on a page and all pages with the results
* Results can be sorted by price or by alphabet (IATA codes). Sorting by price is the main functionality of this app

Technical

The app is built in jQuery and makes calls to the Aviasales Travelpayouts Price map API. It has been built to be responsive across all screens.

Future Enhancements

* Create drop down for the cities and airport IATA codes
* As for the current version, CORS extension is required for searching (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)