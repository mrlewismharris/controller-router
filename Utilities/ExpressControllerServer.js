const  fs = require('fs')
const express = require('express')

module.exports = {
    ExpressControllerServer: (config = {}) => {
        const __root = process.cwd()
        const port = config.port ?? 3000
        const controllersLocation = config.controllersLocation ?? "Controllers"
        const staticFolder = config.public ?? "public"
        const indexController = config.indexController ?? "Index"
        const controllerSuffix = config.controllerSuffix ?? "Controller"

        let bootstrappedControllers = []

        fs.readdir(`${__root}/${controllersLocation}`, (err, path) => {
            if (err) {
                console.log(`Error reading controllers location: "${controllersLocation}" - Check it exists in the root directory`)
            }
            path.forEach(path => {
                if (fs.lstatSync(`${__root}/${controllersLocation}/${path}`).isDirectory()) {
                    if (fs.existsSync(`${__root}/${controllersLocation}/${path}/${path}${controllerSuffix}.js`)) {
                        bootstrappedControllers[path] = require(`${__root}/${controllersLocation}/${path}/${path}${controllerSuffix}.js`)
                    } else {
                        console.log(`The Controller directory "${path}" exists, but does not include a js file - create a .js file in this directory with the name of the controller + "${controllerSuffix}.js"`)
                    }
                }
            })
            console.log(bootstrappedControllers)
        })
        
        const app = express()
        app.use(express.static(`/${staticFolder}`))

        app.use('/', (req, res) => {
            if (bootstrappedControllers[indexController]) {
                if (bootstrappedControllers[indexController][indexController]) {
                    res.send(bootstrappedControllers[indexController][indexController]())
                } else if (bootstrappedControllers[indexController]["Index"]) {
                    res.send(bootstrappedControllers[indexController]["Index"]())
                } else {
                    res.send(`500: Controller "/${controllersLocation}/${indexController}/${indexController}${controllerSuffix}.js" contains no index function - create a function as "Index" or the controller name`)
                }
            } else {
                res.send(`404: Controller "${indexController}" does not exist on the server at: "/${controllersLocation}/${indexController}"`)
            }
        })

        app.use('/:controller', (req, res) => {
            const controller = req.params.controller
            if (fs.existsSync(`${__root}/${controllersLocation}/${controller}`, 'utf-8')) {
                res.send("Hello World!")
            } else {
                res.send(`404: Controller "${controller}" does not exist on the server at: "/${controllersLocation}/${controller}"`)
            }
        })
        
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    }
}