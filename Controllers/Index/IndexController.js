var eta = require('eta')
const path = require('path')

module.exports = {
    Index: async (data) => {
        return await eta.renderFile(path.join(__dirname, '/Views/Index.eta'), {
            root: data.root,
            developer: data.serverData.environment == "dev"
        })
    }
}