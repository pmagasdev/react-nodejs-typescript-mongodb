# Use an official Node.js runtime as the base image
FROM node:14.14.0-alpines

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining app files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
# FROM nginx
EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html

# Start the React app
CMD ["npm", "start"]
