# Product API Backend

This is a backend API built with **Node.js**, **Express.js**, and **MongoDB**. It provides **CRUD operations** for managing products. A middleware function is implemented to handle errors effectively.

## Features
- Create, Read, Update, and Delete (**CRUD**) operations for products.
- Middleware for handling errors and validating requests.
- Express.js for building the RESTful API.
- MongoDB with Mongoose for data storage.
- CORS support for frontend integration.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **dotenv** (for environment variables)
- **cors** (for cross-origin requests)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Stephen-sudo/Node-API-V2.git
   cd Node-API-V2
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```


3. **Run the server:**
   ```sh
   npm run dev
   ```

## API Endpoints

| Method | Endpoint         | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/api/products`     | Fetch all products        |
| GET    | `/api/products/:id` | Fetch a single product    |
| POST   | `/api/products`     | Create a new product      |
| PUT    | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product          |

## Middleware

A custom error-handling middleware is implemented to catch and process errors:

```js
export const errorMiddleware = (error, req, res, next) => {
  console.error("Error Middleware: ", error.message);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({ message: error.message });
};
```

## Folder Structure

```
backend/
│-- models/
│   ├── productModel.js  # Mongoose schema
│-- routes/
│   ├── productRoute.js  # API routes
│-- middleware/
│   ├── errorMiddleware.js # Error handling middleware
│-- .env                 # Environment variables
│-- server.js            # Main entry point
│-- package.json         # Dependencies and scripts
```


