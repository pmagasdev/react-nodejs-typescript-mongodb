# Use an official Node.js runtime as the base image
FROM node:14.14.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining app files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]
