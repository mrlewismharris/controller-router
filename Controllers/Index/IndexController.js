var path = require('path')

module.exports = {
    Index: async (data) => {
        return await data.eta.renderFile(path.join(__dirname, 'Views/Index.eta'), {
            root: data.root,
            developer: data.serverData.environment == "dev",
            views: "",
            path: {
                join: path.join
            },
            dirname: __dirname
        })
    }
}