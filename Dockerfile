
FROM node:latest


# # Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Bundle app source
COPY . .
RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start" ]