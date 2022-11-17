import express from 'express'
import cors from 'cors'
 //const express = require('express')
//import examplesController from "./controller/examples-controller.js"
import HelloController from "./controller/hello-controller.js";
import UserController
    from "./controller/users/users-controller.js"
//const examplesController = require('./controller/examples-controller')
import TuitsController
    from "./controller/tuits/tuits-controller.js";

const app = express()
app.use(express.json());
//app.get('/hello', (req, res) => {res.send('Hello World!')})
//app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(cors())

//examplesController(app)
HelloController(app)
UserController(app)
TuitsController(app)






app.listen(process.env.PORT || 4000);