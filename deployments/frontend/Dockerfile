FROM node:18.13.0

#set working directory
WORKDIR /app

#install and cache app dependencies
COPY ./frontend .
RUN npm install

# start app
CMD ["npm", "run", "dev"]