FROM cypress/base:16.18.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install --save-dev cypress
RUN npm install --save-dev cypress-multi-reporters mocha-junit-reporter
RUN npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
RUN $(npm bin)/cypress verify


RUN ["npm", "run" ,"test:e2e"]