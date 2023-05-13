import express from "express";
import { createUserController, getUserController} from "./user.controller";
const router = express.Router();

router.get('/',getUserController);
router.post("/create", createUserController)

export default router;
