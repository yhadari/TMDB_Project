FROM node:18.13.0

#set working directory
WORKDIR /app
RUN echo "y" | apt-get update
RUN echo "y" | apt-get install vim

#install and cache app dependencies
COPY ./frontend .
RUN npm install

# start app
CMD ["npm", "run", "dev"]