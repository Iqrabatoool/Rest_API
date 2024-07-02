# REST API 
![Express.js Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png)

This repository provides a boilerplate for quickly setting up a RESTful API using Express.js. It includes basic CRUD operations for managing users stored in a JSON file (MOCK_DATA.json).

## Features

- **GET `/api/users`:** Retrieve all users.
- **GET `/api/users/:id`:** Retrieve a user by ID.
- **POST `/api/users`:** Create a new user.
- **PATCH `/api/users/:id`:** Update an existing user.
- **DELETE `/api/users/:id`:** Delete a user.

## Installation

### Clone the repository:
git clone https://github.com/your-username/express-rest-api.git

## Install dependencies
npm init
npm installl express

**Start the server:**
npm start
The server will start running on http://localhost:8000.

**Usage**
Use tools like Postman to interact with the API endpoints.
Customize and extend the API according to your project requirements.

**Mock data**
I got this mock data from Mockaroo
https://www.mockaroo.com/

## Possible error
In case you are facing error of start, add this script in your package.json 
 "start": "node app.js"
**It may look like this **
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js" },

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

**Notes:**
Customize the "Installation", "Usage", and "Endpoints" sections based on your specific project requirements.
Include any additional setup instructions or details about the project structure if necessary.
Provide clear examples and explanations to help users understand how to use and extend your API.
This README provides a comprehensive overview of the Express.js REST API boilerplate, making it easier for others to understand, use, and contribute to your project.
