var path = require('path')

module.exports = {
    Index: async (data) => {
        return await data.eta.renderFile('Views/Index.eta', {
            root: data.root,
            developer: data.serverData.environment == "dev",
            views: path.normalize(__dirname)
        })
    }
}