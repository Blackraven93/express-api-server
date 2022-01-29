import * as express from "express";
import { Birds, BirdType } from "../../routers/birds/birds.model";

const birdRouter = express.Router()


//* Router
birdRouter.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("<h1>I Like bird</h1>")
})

//* Read Bird 전체 데이터 모두 조회

birdRouter.get("/birds", (req, res) => {
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

birdRouter.get("/birds/:id(\\d+)", (req: express.Request, res: express.Response) => {
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

birdRouter.post("/birds", (req: express.Request, res: express.Response) => {
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

//* UPDARE 고양이 데이터 업데이트 -> PUT
birdRouter.put("/birds/:id(\\d+)", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    let result;
    try {
        Birds.forEach(e => {
            if (e.id === Number(id)) {
                e = req.body
                result = e
            }
        })

        res.status(200).send({ bird: result })
    } catch (error) {
        throw new Error("Can't amend data")
    }
})




//* UPDARE 고양이 데이터 부분적으로 업데이트 -> PATCH
birdRouter.patch("/birds/:id(\\d+)", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    let result;
    try {
        Birds.forEach(e => {
            if (e.id === Number(id)) {
                e = { ...e, ...req.body };
                result = e
            }
        })

        res.status(200).send({ bird: result })
    } catch (error) {
        throw new Error("Can't amend data")
    }
})

//* UPDARE 고양이 데이터 삭제 -> DELETE
birdRouter.delete("/birds/:id(\\d+)", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    // let birds;
    // let left = [];
    // let right = [];
    try {
        // for (const bird of Birds) {
        //     if (bird.id !== Number(id)) {
        //         if (bird.id < Number(id)) {
        //             left.push(bird)
        //         } else {
        //             bird.id -= 1
        //             right.push(bird)
        //         }
        //     }
        //     birds = [...left, ...right]
        // }

        // 밑의 방법이 약 3배정도 더 빠름
        const birds = Birds.filter((bird) => bird.id !== Number(id))
        res.status(200).send({ Birds: birds })
    } catch (error) {
        throw new Error("Can't delete data")
    }
})


export default birdRouter;