var path = require('path')

module.exports = {
    Index: async (data) => {
        return await data.eta.renderFile('Views/Index.eta', {
            root: data.root,
            developer: data.serverData.environment == "dev",
            views: __dirname,
            path: {
                join: path.join
            },
            dirname: __dirname
        })
    }
}