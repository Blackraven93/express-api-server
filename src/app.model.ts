export type BirdType = {
    id: number,
    name: string,
    color: Array<string>,
    canFly: boolean,
    weight: number
}

export const Birds: BirdType[] = [
    {
        id: 1,
        name: "raven",
        color: ["black", "grey", "pupple"],
        canFly: true,
        weight: 3.3
    },
    {
        id: 2,
        name: "parrot",
        color: ["green", "red", "orange", "yellow"],
        canFly: true,
        weight: 2.2
    },
    {
        id: 3,
        name: "kiwi",
        color: ["brown", "black"],
        canFly: false,
        weight: 3.2
    },
    {
        id: 4,
        name: "pigeon",
        color: ["white", "grey", 'black', 'brown', 'teal'],
        canFly: true,
        weight: 1.9
    },
    {
        id: 5,
        name: "woodpecker",
        color: ["black", "red", 'white'],
        canFly: true,
        weight: 1
    },
    {
        id: 6,
        name: "sparrow",
        color: ["brown", "white"],
        canFly: true,
        weight: 0.3
    },
    {
        id: 7,
        name: "swallow",
        color: ["black", "grey", "pupple"],
        canFly: true,
        weight: 0.2
    }
]