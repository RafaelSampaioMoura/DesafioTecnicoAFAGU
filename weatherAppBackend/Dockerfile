FROM node:18-alpine

WORKDIR /weatherAppBackend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]