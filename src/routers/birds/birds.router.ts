import * as express from "express";
import { Birds, BirdType } from "../../routers/birds/birds.model";
import { allBirds, createBird, deleteBird, getBird, home, replaceBird, updateBird } from "./birds.service";

const birdRouter = express.Router()


//* Router
birdRouter.get("/", home)

//* Read Bird 전체 데이터 모두 조회
birdRouter.get("/birds", allBirds)

//* Read Bird 특정 데이터 조회
birdRouter.get("/birds/:id(\\d+)", getBird)

//* Create Bird 특정 데이터 추가
birdRouter.post("/birds", createBird)

//* UPDARE 고양이 데이터 업데이트 -> PUT
birdRouter.put("/birds/:id(\\d+)", replaceBird)

//* UPDARE 고양이 데이터 부분적으로 업데이트 -> PATCH
birdRouter.patch("/birds/:id(\\d+)", updateBird)

//* UPDARE 고양이 데이터 삭제 -> DELETE
birdRouter.delete("/birds/:id(\\d+)", deleteBird)


export default birdRouter;