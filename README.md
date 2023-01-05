# controller-router
a custom controller router for node js + express applications, built around an intuitive and repeatable development process.

# intallation
0. required node.js + git
1. `git clone https://github.com/mrlewismharris/controller-router` clone the repo
2. `cd controller-router` change directory into controller-router
3. `npm i` install dependencies
4. `npm run dev` run the app in dev mode, controllers and their endpoints will be logged to the terminal
5. goto `http://localhost:3000` to see the live application

# config options
in the `index.js` file, call the `ExpressControllerServer` function with an object parameter:
```
const app = require('./Utilities/ExpressControllerServer').ExpressControllerServer({
  port: 3000, //port
  controllersLocation: "Controller", //controller directory
  staticFolder: "public", //public static files directory (e.g. js, css, images)
  indexController: "Index", //controller for server's landing page "/"
  indexEndpoint: indexController, //endpoint for server's landing page (copies indexController's name)
  controllerSuffix: "Controller" //suffix of controller js files (e.g. "TestController") - can be empty if you'd prefer
})
```
note: *above values are the property defaults, all directories are relative to root index.js file*

# development process
### adding controllers
controllers are used to handle server-side logic after the route has been requested by the user, but before the page is rendered.

# aims
  - easy to understand controllers and endpoint, with repeatable workflow from zero to endpoint
  - authentication built into the express route and relevant data parsed to the controller

# todos
  - ~~remove server side fs call on every page load~~ ✔️
  - ~~simplify code and seperate concerns into server and controller/enpoint loading~~ ✔️
  - auto-reload in developer mode using ajax polling ever 50-100ms
  - add method for parsing arguments from req to controllers (such as queries, body, etc.)
  - before controller is loaded/initialised, bootstrap authentication if the user sends certain request
    - in the route request, before the endpoint.call() function, do this auth, then send it as object param
    - figure out way to decorate the endpoints in a controller in an intuitive way:
      - some form of marker on the controller or endpoint, all marked endpoints will evaluate a custom expression (based on the marker's name) BEFORE loading the endpoint, to determine whether the user has access to the endpoint, or to send a 403 response
  - modify module's structure: require() the module, initialise the new class (with config, or config added later with .addConfig({}) ), and run() (to allow for building future functionality)