FROM node:10
LABEL maintainer = "SquaredLabs"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .
RUN npm run build

EXPOSE 3000
ENV HOST=0.0.0.0
CMD [ "npm", "start" ]
