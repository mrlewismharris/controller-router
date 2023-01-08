module.exports = {
    Index: async (data) => {
        return await data.eta.renderFile(`${__dirname}/Views/Index.eta`, {
            root: data.root,
            developer: data.serverData.environment == "dev"
        })
    }
}