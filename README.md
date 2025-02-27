# 📌 Netflix GPT

A similar site to Netflix (Netflix + GPT) that utilizes the Mistral AI to help users discover movies. Users can describe what they want to watch (e.g., "I want to watch a Christmas anime" or "A cartoon similar to Encanto"), and the app provides tailored movie recommendations based on their input. Fetched movies data from [TMDB](https://www.themoviedb.org/)


## 📌 Live Demo

👉 Check out live Demo [Netflix GPT](https://netflix-gpt-seven-smoky.vercel.app/)


## Prerequisites
[Node JS installed](https://nodejs.org/en/download)
[Firebase account and create a project](https://firebase.google.com/)
[Mistral AI account](https://console.mistral.ai/home)
[TMDB account](https://www.themoviedb.org/)



## Technologies used
```
    1. Frontend: 
       - React + vite
       - Tailwind css (A CSS framework for styling)
    2. Backend: 
       - ChatGPT API (For user queries and recommending matching movies searched)
       - Firebase (For Authentication)
```


## 📌 Clone project
```
    git clone https://github.com/agigibairene/Netflix-gpt.git
    cd Netflix-gpt
```

### Install dependencies
```
    npm install
```

## Setting up project
Create a .env file in the your directory and add these variables to your file
```
    touch .env
    echo "VITE_API_KEY = firebase api key" >> .env
    echo "VITE_APPID = firebase appId" >> .env
    echo "VITE_MESSAGING_SENDER_ID = your firebase messagingSenderId" >> .env
    echo "VITE_MOVIE_APIKEY = your TMDB_API key" >> .env
    echo "VITE_ACCESS_TOKEN = your TMDB access token" >> .env
    echo "VITE_OPENAI_API_KEY = your mistral AI API key" >> .env
```


### Run application
```
    npm run dev
```