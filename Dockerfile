FROM node:8
WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm build
CMD ["npm","start"]
