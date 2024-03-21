FROM node:20-alpine3.17
# App directory
WORKDIR /app

# App dependencies
COPY package*.json ./
RUN npm i

# Copy app source code
COPY . .

#Expose port and begin application
EXPOSE 3000

#Build source code
RUN npm run build --no-lint

# Start the app
CMD npm run start