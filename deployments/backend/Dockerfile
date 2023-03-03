FROM node:18.13.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY ./backend .
RUN npm install

# start app
# RUN npx prisma generate
RUN chmod +x migrate.sh
ENTRYPOINT ["sh", "migrate.sh"]
CMD ["npm", "run", "dev"]