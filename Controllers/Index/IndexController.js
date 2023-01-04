module.exports = {
    Index: () => {
        return `Hello you! - from the index controller
        <br><br>
        Notice how the URL does not contain a controller or endpoint, this is the default index page for the server.<br><br>
        The server's default landing page is set with the <code>indexController</code> and <code>indexEndpoint</code> config properties.<br>
        If the indexController property is set, but not the indexEndpoint, the controller function with the same name as the controller name (i.e. <b>Index</b>Controller.js would be the <b>Index</b>() function) is used.
        <br><br>
        Go to the <a href="/Test">test page</a>`
    }
}