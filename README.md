# Social Network Api

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Technologies](#technologies)
- [Application](#application)
- [Video Demo](#video-demo)
- [Questions](#questions)

## Description

This is a backend server for a social network platform, built using express and MongoDB. A user can make friends, share thoughts and react to their friends' thoughts.

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia / Postman for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia / Postman
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Technologies

- Mongoose
- Express
- DotENV
- moment
- MongoDB
- Nodemon

## Application

To install the application, begin by cloning the repository from your terminal

```
git@github.com:sophia4422/social-network-api.git
```

move into the new project by running

```
cd social-network-api
```

install the relevant packages

```
npm i
```

open the project

```
code .
```

create an env file in the root level, copy over the env.sample file and enter the DB name

seed the DB

```
npm run seed
```

start the server

```
npm run start
```

test the routes using Postman. Take the Postman file from the root and import it into Postman.

## Video Demo

[View the video demonstration here](https://drive.google.com/file/d/1xeMgsa-gPm23HR22UXrYQnsH6WxJMN_u/view?usp=sharing)

## Questions

For any questions, please contact me:

Email: sophiapwall@yahoo.co.uk

[View my LinkedIn here](https://www.linkedin.com/in/sophia-wall/)

[View my Github here](https://github.com/sophia4422)
