# "Evaluate A News Article with Natural Language Processing" Project

This project goal is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. we will make use of an external api called [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis) to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.


![Main Page](https://i.imgur.com/zyY3sQ2.png)

## Tools used
* Node
* Node Express
* sass
* webpack-dev-server
* webpack
* various loaders and plugins package.json
* service worker - Workbox
* dotenv for storing API_KEY for MeaningCloud
* jest for testing
  
## Project Setup

* install Node.js for your operating system.
* clone repo `git clone https://github.com/nakhla/BuildTools-Project3-EvaluateNewsNLP.git`
* move to project directory `cd <project directory.`
* install all project dependencies `npm install`
* Register at meaningCloud for a free API_KEY [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis)
* install  `dotenv` package `npm i dotenv`
* create `.env` file in the root of `<project directory>`
* write the `API_key` in this file: `API_KEY= YOURAPIKEYFROMMEANINGCLOUD`
* build the project and start the node express server `npm run build` and `npm run start`
* for development `npm run dev`

## Author
This Project is built by [Magdi Nakhla](https://fb.me/nakhla) as part of Udacity Nanodegree Program.