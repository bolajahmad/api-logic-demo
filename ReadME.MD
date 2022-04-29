# How to make REST API Requests in React

Unless you’re building a static HTML website, there’s aevery single chance your application will rely a lot on data from one or more chances. Some apps will have up to 100 API endpoints to request data from and many apps have way more. It goes without saying that this is an important job for a frontend engineer.

Many times I see a lot of apps achieving this task in a very strenuous and uncommitted way. In this blog, i’ll go over an easy, yet satisfying way to build the logic around it. P’ll use fetch API as well as Axios library as well. Fetch API is an alternative for the unpopular XMLHttpRequest, while axios is a popular promise based HTTP library. This tutorial uses typescript, but you can follow along even if you don’t have typescript knowledge.

To start, we will need to create a local react app. Assuming you have your Visual Studio Code opened:
- Install the latest version of react-app using 
     ``
       npx create-react-app api-app --template typescript
    ``
- navigate into the project folder
``
 cd api-app
``

##	Using Fetch
Create a new file called api-client.ts
