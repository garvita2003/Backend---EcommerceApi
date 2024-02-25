# Ecommerce API using Backend
In this Project I demonstrated the implementation of various CRUD operations on features of an application. First we need to create account in MongoDB through cloud.mongodb.com and create a cluster or database.
Then we used to Authenticate the user through Register and Login features and provide with the JWT ie JsonWebToken to each user when they register for the first time so that we can provide the access base on their
authorization for operations. We can add(Register, login in case of Users), update, get all, get all using various query such as new or latest or categories, get stats(in case of order, cart, etc.) and delete - user,
product, cart, order and this can be done by Authorized User or Admin only or sometime both can perform the operations.In order to pass the request and body in case of POST request then use Postmon as we 
cannot use our own browser as no import from the client side is there so to test it we have the application - Postman

# Commands Used for implementation
1. npm init -y : a command-line instruction used to create a package. json file for a Node. js package
2. npm i express : Express is a node js web application framework that provides broad features for building web and mobile applications.
3. npm i mongoose : provides an interface to the database for creating, querying, updating, deleting records, etc.
4. npm i dotenv : can be used for simple container deployments and even complex full-stack deployments. Either way, it's a much more secure way of using secrets for a deployment.
5. npm i nodemon : helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.
6. npm start : to start running your application
7. npm add crypto-js : In order to encrypt and decrypt the password while saving in a DataBase in encrypted format
8. npm add jsonwebtoken : to make our application more secure using JWT by providing an authentication mechanism. To verify our apllication user after login process we will provide them with the json web token so whenever they try to perform CRUD operations then we verify if that item belongs to the same user or not through this

# Technology Used
1. Node.js
2. Express.js
3. MongoDB Cloud
4. JsonWebToken(JWT)
5. Crypto-js

# Overview - CRUD operations - from rest client - Postman Application
Authentication : 
1. REGISTER -post
2. LOGIN - post
   
User :
1. UPDATE - put
2. GET ALL USER - get
3. GET USER BASED ON QUERY - get
4. GET USER STATS -get
5. DELETE -delete

Product :
1. CREATE - post
2. UPDATE -put
3. GET ALL PRODUCTS - get
4. GET PRODUCT BASED ON QUERY - get
5. DELETE -delete

Cart :
1. CREATE - post
2. UPDATE - put
3. GET USER CART - get
4. GET ALL CART - get
5. DELETE - delete

Order:
1. ADD - post
2. UPDATE - put
3. GET ALL ORDERS - get
4. GET USER ORDER - get
5. GET ORDER STATS - get
6. DELETE -delete

![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/32d03cb1-6ff0-4c32-8a07-4c8512836cf8)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/3b65e013-e414-4511-9b7c-8ffa4be1024c)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/c400da81-6295-485d-84ab-aaad9237cc29)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/a2bcc4f0-ff58-448a-8a3d-11209f83fa69)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/747f400a-23c5-4191-a3ac-432df97c1ea6)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/29a9c03c-1990-4518-a60f-05da9d12539b)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/c4842902-c691-4f6d-8342-74733806b20f)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/f10410f5-f280-4ce6-ab9d-92c43a9d2aac)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/3a05668a-4574-4266-8a48-44dfa546059d)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/fd340dd4-e0d1-4928-bb43-093d1fbdc6de)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/2125269d-dde7-4527-ac49-f4e66f1d6b57)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/39943f5b-5e63-4c61-b0ae-155fdff501ea)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/1974d671-88a1-4173-a193-0cbc902035c0)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/1d602419-5b5c-496d-8061-e2b2f8f3f6f8)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/b55903cd-c570-4af9-a20d-6fdb55d16079)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/7b214525-8fc3-4478-80ce-6ad2a8a5b8a3)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/05b521c9-184e-40aa-b46a-43b57bc386da)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/d359c4cb-6fff-4f54-8411-e69c08453c83)
![image](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/21ba261d-9f73-46f3-a0e4-20264095203e)

   
# Output Video Source Link - from rest client - Postman Application


# Using Git Bash to upload the project
![Screenshot 2024-02-25 112006](https://github.com/garvita2003/Backend---EcommerceApi/assets/102051676/6b9cd55e-7917-46e1-87fb-3770606b3455)
