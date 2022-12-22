const  fs = require('fs')
const express = require('express')
const port = 3000
const controllersLocation = "Controllers"
const staticFolder = "public"
const indexController = "Index"
let controllers = []

fs.readdir(`./${controllersLocation}`, (err, path) => {
    path.forEach(path => {
        if (fs.lstatSync(`./${controllersLocation}/${path}`).isDirectory()) {
            if (fs.existsSync(`./${controllersLocation}/${path}/${path}Controller.js`)) {
                controllers[path] = require(`./${controllersLocation}/${path}/${path}Controller.js`)
            } else {
                console.log(`The Controller directory "${path}" exists, but does not include a js file - create a .js file in this directory with the name of the controller + "Controller.js"`)
            }
        }
    })
})

const app = express()
app.use(express.static(`/${staticFolder}`))

app.use('/', (req, res) => {
    if (controllers[indexController]) {
        if (controllers[indexController][indexController]) {
            res.send(controllers[indexController][indexController]())
        } else if (controllers[indexController]["Index"]) {
            res.send(controllers[indexController]["Index"]())
        } else {
            res.send(`500: Controller "/${controllersLocation}/${indexController}/${indexController}Controller.js" contains no index function - create a function as "Index" or the controller name`)
        }
    } else {
        res.send(`404: Controller "${indexController}" does not exist on the server at: "/${controllersLocation}/${indexController}"`)
    }
})

app.use('/:controller', (req, res) => {
    const controller = req.params.controller
    if (fs.existsSync(`./${controllersLocation}/${controller}`, 'utf-8')) {
        res.send("Hello World!")
    } else {
        res.send(`404: Controller "${controller}" does not exist on the server at: "/${controllersLocation}/${controller}"`)
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})