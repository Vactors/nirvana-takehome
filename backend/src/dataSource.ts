import "reflect-metadata"
import { DataSource } from "typeorm"
import { Video } from "./entities/video.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql",
    port: 3306,
    username: "nirvana",
    password: "nirvana",
    database: "nirvana",
    synchronize: true,
    logging: false,
    entities: [Video],
    migrations: [],
    subscribers: [],
})
