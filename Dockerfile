FROM cypress/base:12

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install
RUN npm run test-headed
