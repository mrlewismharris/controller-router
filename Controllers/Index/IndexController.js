var eta = require('eta')

module.exports = {
    Index: async (data) => {
        return await eta.renderFile(__dirname + "/Views/Index.eta", {
            root: data.root,
            developer: data.serverData.environment == "dev"
        })
    }
}