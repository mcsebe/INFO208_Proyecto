FROM node:14

WORKDIR /app

COPY api/. .

RUN npm install


EXPOSE 5000

CMD ["node", "index.js"]