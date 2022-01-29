import * as express from "express";
import 'dotenv/config'
// import dotenv from "dotenv" 차이가 있음

import { Birds, BirdType } from "./app.model";

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

//* Router
app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("<h1>I Like bird</h1>")
})

//* Read Bird 전체 데이터 모두 조회

app.get("/birds", (req, res) => {
    try {
        res.status(200).send({
            success: true,
            Birds
        });
    } catch (err) {
        throw new Error("Can't found birds data")
    }
})

//* Read Bird 특정 데이터 조회

app.get("/birds/:id(\\d+)", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    const lastIndex = Birds.length - 1
    if (Birds[lastIndex]["id"] < Number(id)) {
        res.status(400).send({ error: "404 not found error" })
    }
    try {
        const bird = Birds.find(e => {
            if (e.id === Number(id)) return e
        })
        res.status(200).send({ bird })
    } catch (error) {
        throw new Error("Can't found anything")
    }
})

//* Create Bird 특정 데이터 추가

app.post("/birds", (req: express.Request, res: express.Response) => {
    const data = req.body
    Birds.push(data)
    try {
        res.status(200).send({
            success: true,
            Birds
        });
    } catch (err) {
        throw new Error("Can't found birds data")
    }
})

//* 404 middleware
app.use((req: express.Request, res: express.Response, next) => {
    res.status(400).send({ error: "404 not found error" })
})


// init
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`)
})