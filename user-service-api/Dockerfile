FROM node:16.14.0-alpine
WORKDIR /app
ADD package*.json ./
ADD . .
RUN npm install
CMD node index.js
