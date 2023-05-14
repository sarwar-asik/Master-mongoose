import express from "express";
import {
  createUserController,
  getStaticAdminController,
  getUserByIdController,
  getUserController,
} from "./user.controller";
const router = express.Router();

router.get("/", getUserController);
router.post("/create", createUserController);
router.get("/getAdmin", getStaticAdminController);
router.get("/:id", getUserByIdController);

export default router;
