Hi,

I want to explain the app, first of all I have some problems login in github api just with email and password,
so finally I decided to use the authtoken that can be generate from git hub.

First of all the user need to sign up with an email and password(in the header of the petition should inform the auth token from git hub),
after this the user will have a temporary access token(this token will expire) if the token expire the user should logIn in the app informing
again the authtoken, i feel this will make tha api a little more secure then just using the github token for signUp and logIn.

The information of the user will be store in MongoDb and for making the search faster I decided to use Redis as cache, the cache is temporary
but is the user wants to refresh it faster can user the refresh endpoint.

I'm adding a postman collection for testing, you will need to replace 2 vars:

{{GITHUB_TOKEN}} = User git hub token
{{APP_TOKEN}} = Token returned for signUp and logIn urls

May the force be with you
