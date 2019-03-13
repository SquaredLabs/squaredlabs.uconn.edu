FROM node:8
WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
EXPOSE 8080
RUN npm run build
CMD ["npm","start"]
