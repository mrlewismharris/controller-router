const crypto = require('crypto')

module.exports = {
    GetServerData: (data) => {
        if (data.serverData.environment != "dev")
            return
        return data.serverData
    },
    GetLastServerRestart: (data) => {
        if (data.serverData.environment != "dev")
            return "400"
        return { restartHash: crypto.createHash('md5').update(data.serverData.initiateTime.toString()).digest('hex') }
    }
}