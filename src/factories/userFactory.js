import UserController from "../controllers/userController.js";
import UserService from "../services/userService.js";
import Database from "../models/database.js";
import pool from "../models/pool.js";

const factory = {
    async initialize() {
        return UserController.initialize({
            service: new UserService({
                database: new Database({
                    pool
                })
            })
        })
    }
}

export default factory