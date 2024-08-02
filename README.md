# Asset Management API

## Description

The Asset Management API is a Node.js application built with Express and TypeScript. It provides a set of endpoints to manage assets, including creating, updating, deleting, and retrieving asset information.

## Features

- RESTful API for asset management
- TypeScript for type safety
- Express.js for routing
- Environment variable support with dotenv
- Nodemon for development

## Requirements

- Node.js (>= 14.x)
- Docker (for containerization)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ostrich-white/asset-management-api.git
   cd asset-management-api

2. Install dependencies:
    ```sh
    npm install
3. Build the application:
   ```sh
   npm run build

## Running the Application
### Locally
1. Start the application:
    ```sh
    npm start
1. For parallel development start the application :
    ```sh
    npm run serve
2. The application will be running at http://localhost:3000.

### In a Docker Container
1. Build the Docker Image
    ```sh
    docker build -t asset-management-api .
2. Run the Docker Container
    ```sh
    docker run -p 3000:3000 --name asset-management -d asset-management-api
3. The application will be running at http://localhost:3000.

# Scripts
- npm run build: Compiles the TypeScript code to JavaScript.
- npm start: Runs the compiled JavaScript code using Nodemon.
- npm run serve: Runs the TypeScript compiler in watch mode and the application using Nodemon.

# Project Structure
- src/: Contains the TypeScript source files.
- dist/: Contains the compiled JavaScript files.
- package.json: Contains the project metadata and dependencies.

# Contributing
If you want to contribute to this project, please fork the repository and submit a pull request.

# License
This project is licensed under the ISC License. See the LICENSE file for more details.

# Contact
For any questions, bugs or issues, please open an issue on GitHub.
