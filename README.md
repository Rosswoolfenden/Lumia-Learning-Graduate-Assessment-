# Lumia-Learning-Graduate-Assessment-
My submission for the graduate assessment for Lumia learning.

My project contains to separate code bases, a Koa.js API backend and a React single page application for the frontend.

To clone repo: `git clone https://github.com/Rosswoolfenden/Lumia-Learning-Graduate-Assessment-.git`

### Backend: `cd api`

`Update config with host and user details for databse`

To install dependencies: `npm i`

To start API: `npm start`

### Frontend: `cd react-app`

To install dependencies: `npm i`

To Start React app: `npm start`


### The Task

For the task I decided to create a two-part solution with the frontend and backend end separated. I chose to do this, so the system has better scalability and better resource optimization as well as to highlight my skills.

For the backend I chose to use the Koa web framework. The framework is developed and very similar to Express. The aim of the framework is to be more lightweight with no bundled middleware. I also prefer to develop API's with the Koa framework because it allows more simple and clean code with newer features such as a single res/req object. I chose Winston logging as it provides a good looking and well orginized solution to logging. 

The frontend was developed using React. I chose React over other frontend frameworks as it provides more freedom and flexibility. I also wanted to use this task to further develop my skills using the framework as my experience using the framework is not extensive. I used Antd desgin libary for many of the components, this was used to increase speed of development.

I chose to store my data using MariaDB. It offers better performance than MySQL so will make the system perform better if scaled.

### About the system - features and issues.
The system has a basic auth system. Should the system be further developed Auth0 should be implemented for better security.
The login system has some issues. The backend does not pre check if a username exists in the table so does not provide good feedback to the user if the username is already taken.
I chose to implement a search function to allow users to search for films by title using the ombd API search functionality. I chose to implement this feature as a more intuitive way for users to add their favourite movies. The solution works well but does have some issues.
issues:
- The input does not have any protection against XSS attacks which creates security issue. 
- The search bar does not perform well when back spacing. 
- The ombd search response does not provide data regarding the film plot, meaning two calls are needed when displaying when reusing movie card component to display the search response (I chose to do this for code reusability and to save time)

The error handling of the system is not good. Due to the speed of development error responses are not dealt with well with not all correct http response codes implemented. 

The frontend code base is very messy and unoptimized. Currently there is little code separation which makes the systems testability difficult which should be the immediate next steps for development.

I did not spend as much time as I would of liked in tweaking with the design of the page. It is not responsive to different screen sizes or for mobile use. 

The React frontend was the part of this project I struggled with the most. Having less experience using the framework I had to learn as I developed. This led to the code not following many best practices. It was a very good project to develop my skills with the framework. 

### Next Steps.
I plan to follow up on this project when my course is finnished and i have more time for more development. 
The next stages will be:
- React code clean up (seperation of components and function)
- Unit testing.
- Better error handling.
- Refine design to look nicer.
- More functionality (Social - see other peoples movie lists)
