FROM node:14

WORKDIR /app

COPY client/. .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]