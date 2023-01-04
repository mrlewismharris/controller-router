# controller-router
A custom controller router for node js + express applications

Aims:
  - Simple and easy to understand controllers and endpoints ✔️
  - Contain views
  - Easy to make custom configuration
  - Easy to replicate path to create a folder, view, controller .js file with function (i.e. grab view or utilies api), in the controller folder

Nice to haves:
  - Auto-reload capability (only for development enabled environment)
    - Integrate websockets/socket.io where ALL connections will open a socket, then broadcast a force refresh signal
    - Alternatively use ajax polling - api route with last server refresh time, client polls api route and compares saved time to new time on every poll

Todos:
  - ~~Remove server side fs call on every page load~~ ✔️
  - ~~Simplify code and seperate concerns into server and controller/enpoint loading~~ ✔️
  - Add method for parsing arguments from req to controllers (such as queries, body, etc.)