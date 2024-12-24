import express from "express";
import { login, register } from "../../controllers/users/setUser";
import { getUser, getUserPets } from "../../controllers/users/getUser";
import { checkUser } from "../../controllers/middlwares/loginMid";

const router = express.Router();

router.use(checkUser);
router.post("/login", login).post("/register", register).get("/getUser", getUser);
router.get("/get-user-pets", getUserPets);


export default router;