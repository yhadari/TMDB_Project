FROM node:18.13.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY ./backend .
RUN npm install

# start app

# Run the shell script
RUN chmod +x migrate.sh
RUN ./migrate.sh

RUN npm run start:prisma-studio
CMD ["npm", "run", "dev"]