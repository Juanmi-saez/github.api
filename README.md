Hi,

I want to explain the app, first of all I have some problems login in github api just with email and password,
so finally I decided to use the authtoken that can be generate from git hub.

First of all the user need to sign up with an email and password(in the header of the petition should inform the auth token from git hub),
after this the user will have a temporary access token(this token will expire) if the token expire the user should logIn in the app informing
again the authtoken, i feel this will make tha api a little more secure then just using the github token for signUp and logIn.

The information of the user will be store in MongoDb and for making the search faster I decided to use Redis as cache, the cache is temporary
but is the user wants to refresh it faster can user the refresh endpoint.

I have divided the app in 2 main services auth and search, auth manage the user's info and the communication whit mongoDb and search manage the
communication with git-hub and the cached data

I'm adding a postman collection for testing, you will need to replace 2 vars:

{{GITHUB_TOKEN}} = User git hub token
{{APP_TOKEN}} = Token returned for signUp and logIn urls


To run the code you will need mongoDb running at 27017 and redis at 6379,after that you need to execute:

1. npm install(first time)
2. npm start

UPDATE: I have added a docker-compose to make easier to run, just execute:

1.docker-compose build
1.docker-compose up

The app will be running at port 3001

May the force be with you
