# Build a Spell Book

In this exercise you'll be writing a spell book for the modern witch or wizard! By the time you are done the user should be able to see all of their spells and be able to add more.

We will be using React on the front end, Node and Express on the backend, and MongoDB for our database. The front end is mostly set up for you, but there are some functions for interacting with your server which will need to be added. The database has been created for you and will have some data in it already. The server has some bare functionality but more will need to be added.

### Getting Started

Run ```npm install```

Make sure mongodb is running on your machine, and then run ```npm run seed``` to seed your database with the beginning data.

Run ```npm run react-dev``` to get webpack running.

Run ```npm start``` to get server running.



#### Basic Requirements

+ When the page loads have all the spells from the database render on the page.
+ Allow users to add spells.

[ ] Connect to your mongo database by creating a file in the db folder that creates the connection.

[ ] Ensure that your db connection can be exported, and then import the connection to your server.

[ ] When your app mounts on the front end have it make a call to your server.

[ ] On the server side ensure the GET request from your client it gets all data from your database.

[ ] Once the data is returned have it render on the page.

[ ] Set up the functionality on the front end to send a POST request to the server when the user submits the new spell form.

[ ] Write the route on the server that handles a POST request and ensure that the data is being written to the database.

#### Advanced
+ Allow users to delete spells.

[ ] Add a delete button for each spell

[ ] Write the route on the server to handle the deletion

[ ] Ensure that the spell is deleted from the database

### Resources

[React](#https://reactjs.org/)

[ExpressJS](#https://expressjs.com/)

[Mongoose](#https://mongoosejs.com/)

[Mongo](#https://www.mongodb.com/)
