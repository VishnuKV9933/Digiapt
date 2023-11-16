# Project Title
DIGIAPT

## Description
This Node.js application provides a set of CRUD (Create, Read, Update, Delete) APIs for managing products.
It utilizes the Express.js framework for handling HTTP requests and MongoDB as the database

## Installation

To install and run this project, follow these steps:

1.Clone the repository:
  git clone https://github.com/VishnuKV9933/Digiapt.git
  
2.Change into the project directory

3.Install dependencies:
   npm install
   
4.Configure the application by creating a .env file with the necessary environment variables:

  PORT=6000
  
  MONGO_URL=mongodb://localhost:27017/digiapt
  
5.Start the application:
  npm start

## API Endpoints
1.Create Product:POST api/products

  Request body example:
  
  {
  "productName": "Example Product",
  "productCategory": "Electronics",
  "imageUrl": "https://example.com/image.jpg",
  "productDescription": "This is an example product."
  }
  
2.Get Product by ID:GET api/products/:productId

3.Get All Products with Filters and Pagination:GET api/products?page=1&pageSize=10&productName=apple&category=electronics

4.Delete Product by ID:DELETE api/products/:productId
