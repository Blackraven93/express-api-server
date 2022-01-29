import * as express from "express";
import 'dotenv/config'
// import dotenv from "dotenv" 차이가 있음
import { Birds, BirdType } from "./routers/birds/birds.model";
import birdRouter from "./routers/birds/birds.router";

const app: express.Express = express();
const { PORT } = process.env || 2300

console.log("Express + typescript")

//* logging middleware
app.use((req: express.Request, res: express.Response, next) => {
    console.log(req.rawHeaders[1])
    console.log("This is logging middleware")
    next()
})

//* json middleware
app.use(express.json())

app.use(birdRouter);

//* 404 middleware
app.use((req: express.Request, res: express.Response, next) => {
    res.status(400).send({ error: "404 not found error" })
})


// init
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`)
})