


Introduction
This is a code repository for the CEN3031 Web Application

Using React, Node.js, Express & MongoDB, the application acts as a project showcase for students, as well as performs group pairing and providing resources to students.

Setup:
  In the server folder, create a file called .env
  Intiaialize a new mongoDB collection, copy and paste the connection URL, and insert it into a .env file in the server folder as DATABASE=[url] (don't put the pair of brackets in the variable
  create a new string (at least 20 characters) and insert it in the .env (in server folder) as well JWTKEY=[insert the string here]
  Create a random number between 5 and 15, and insert it as SALTKEY=[random number 5-15]
  
run npm i && npm start for both client and server side to start the app

Local setup:
  Client:
   - cd webapp/client
   - npm install
   - npm start
  Server:
   - cd webapp/server
   - npm install
   - npm start
    
    
Deployment:
  We deployed our server and client to two separate domains: Heroku and Netlify
    Heroku provides good support for the server and Netlify allows you to simply drag and drop your build folder to deploy the frontend
    
  Server: Follow instructions from Heroku CLI deployment
   - cd webapp/server [&& npm install if not done already]
   - heroku login
   - heroku git:clone -a "name of application"
   - cd "name of application"
   - git add .
   - git commit -am "commit message"
   - git push heroku master
    
  Client: 
   - cd webapp/client [&& npm install if not done already]
   - npm run build
   - [In the build folder, add a file called _redirects containing /* /index.html 200]
   - Drag and drop the build folder into the deploy section of Netlify
   - Make sure the base url in src/api/index.js matches that of the heroku url
    
