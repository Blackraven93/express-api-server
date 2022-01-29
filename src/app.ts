import * as express from "express";
import 'dotenv/config'
// import dotenv from "dotenv" 차이가 있음
import { Birds, BirdType } from "./routers/birds/birds.model";
import birdRouter from "./routers/birds/birds.router";



class Server {
    public app: express.Application;
    private PORT: undefined | string


    constructor() {
        const { PORT } = process.env || 2300
        const app: express.Application = express();
        this.app = app;
        this.PORT = PORT;
    }

    private setRoute() {
        this.app.use(birdRouter);
    }

    private setMiddleware() {
        //* logging middleware
        this.app.use((req: express.Request, res: express.Response, next) => {
            console.log(req.rawHeaders[1])
            console.log("This is logging middleware")
            next()
        })

        //* json middleware
        this.app.use(express.json())

        // router
        this.setRoute()

        //* 404 middleware
        this.app.use((req: express.Request, res: express.Response, next) => {
            res.status(400).send({ error: "404 not found error" })
        })
    }

    public listen() {
        this.setMiddleware()
        this.app.listen(this.PORT, () => {
            console.log(`Listening http://localhost:${this.PORT}`)
        })
    }
}


const init = () => {
    const server = new Server()
    server.listen()
}

init()
