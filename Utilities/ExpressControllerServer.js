const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const ControllerEndpoints = require('./ControllerEndpoints')

module.exports = {
    ExpressControllerServer: (config = {}) => {
        //runtime environment: development or production (use arg -env production/development)
        const __environment = process.argv.includes("-env") ? process.argv[process.argv.indexOf("-env")+1] : "dev"
        //set port, controllersLocation, staticFolder, default/index controller name, and controller suffix from config or use defaults
        const port = config.port ?? 3000
        const controllersLocation = config.controllersLocation ?? "Controllers"
        const staticFolder = config.public ?? "public"
        const indexController = config.indexController ?? "Index"
        const indexEndpoint = config.indexEndpoint ?? indexController
        const controllerSuffix = config.controllerSuffix ?? "Controller"

        var endpoints = new ControllerEndpoints(controllersLocation, indexController, indexEndpoint)

        //create app + define static folder based on config
        const app = express()
        app.use(express.static(`/${staticFolder}`))
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        //return a controller based on controller folder + endpoint
        app.use('/:controller/:endpoint', (req, res) => {
            return res.send(endpoints.call(req.params.controller, req.params.endpoint) ?? endpoints.call("Shared", "404"))
        })

        app.use('/:controller', (req, res) => {
            return res.send(endpoints.call(req.params.controller) ?? endpoints.call("Shared", "404"))
        })

        //set the default index page
        app.use('/', (req, res) => {
            return res.send(endpoints.call() ?? endpoints.call("Shared", "404"))
        })
        
        app.listen(port, () => {
            console.log(`Server started on port ${port} in ${__environment} mode`)
        })

    }
}