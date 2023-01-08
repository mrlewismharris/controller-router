module.exports = {
    Test: async (data) => {
        return await data.eta.renderFile(`${__dirname}/Views/Test.eta`, {
            root: data.root,
            developer: data.serverData.environment == "dev"
        })
    },
    ApiCall: () => {
        return { message: `Server datetime is: ${new Date()}` }
    }
}