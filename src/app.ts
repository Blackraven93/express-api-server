import * as express from "express";
import 'dotenv/config'
// import dotenv from "dotenv" 차이가 있음


import { Birds, BirdType } from "./app.model";

const app: express.Express = express();
const { PORT } = process.env || 2300

console.log("Express + typescript")

// logging middleware
app.use((req: express.Request, res: express.Response, next) => {
    console.log(req.rawHeaders[1])
    console.log("This is logging middleware")
    next()
})

// Router
app.get("/", (req: express.Request, res: express.Response) => {
    res.send({ Birds })
})

app.get("/birds", (req, res) => {
    res.send({ Birds, raven: Birds[0] })
})

app.post("/test", (req: express.Request, res: express.Response) => {
    //
})


// 404 middleware
app.use((req: express.Request, res: express.Response, next) => {
    res.send({ error: "404 not found error" })
})


// init
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`)
})