/* const express = require("express")
const path = require("path")
const app = express()

const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})
router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

/* app.listen(3333, ()=>{
    console.log("Servidor Rodando")
}) 

app.listen(process.env.PORT || 33333, ()=>{
    console.log("Servidor Rodando")
})*/
import express from 'express'; 
import {Router} from "express";

const app = express();

const route = Router();

route.get('/',(req, res) => {
    return res.json({
        success: true,
        message: "Sucesso"
    })
})


app.use(route)

app.listen(4000, ()=> {
    console.log("Server running em " + 4000)
})
