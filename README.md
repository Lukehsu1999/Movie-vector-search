This project is modified upon How to Perform Semantic Search Against Data in Your Atlas Cluster
https://www.mongodb.com/docs/atlas/atlas-vector-search/tutorials/vector-search-tutorial/

Using Natural Language to search Movies & similar plot!
You can search with vague descriptions such as "a hero fight against his society" to get movies like:
{"plot":"A young prince fights to free his people with the help of his family mascot, a small dragon who grows upon eating metal.","genres":["Adventure","Family","Fantasy"],"title":"The Legend of Galgameth","year":1996,"score":0.7755596041679382}
'{"plot":"An orphan, whose father has been killed by dark power, attempts to bring justice back to the town.","genres":["Action","Biography","Drama"],"title":"Rise of the Legend","year":2014,"score":0.7782760858535767}'
'{"plot":"A man enslaved by the mob since childhood and raised into behaving like a human attack dog escapes his captors and attempts to start a new life.","genres":["Action","Crime","Drama"],"title":"Unleashed","year":2005,"score":0.7796099185943604}'

How to setup:
1. npm install
2. create your own cluster on MongoDB Atlas and import sample_mflix database
3. create search vector search index vector-search-tutorial on sample_mflix embedded_movies
4. create your .env file with OPENAI_API_KEY and MONGO_CONNECTION_URL
5. change text in atlas-vector-search-tutorials.js for your own query
6. run npm atlas-vector-search-tutorials.js
