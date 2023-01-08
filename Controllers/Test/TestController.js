var path = require('path')

module.exports = {
    Test: async (data) => {
        return await data.eta.renderFile('Views/Test.eta', {
            root: data.root,
            developer: data.serverData.environment == "dev",
            views: path.normalize(__dirname)
        })
    },
    ApiCall: () => {
        return { message: `Server datetime is: ${new Date()}` }
    }
}