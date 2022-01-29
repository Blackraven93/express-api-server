import * as express from "express";
import 'dotenv/config'
// import dotenv from "dotenv" 차이가 있음

const app: express.Express = express();
const { PORT } = process.env || 2300

console.log("Express + typescript")

const data = {}

app.get("/", (req: express.Request, res: express.Response) => {
    res.json(data)
})

app.post("/test", (req: express.Request, res: express.Response) => {

})

app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`)
})