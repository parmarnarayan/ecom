import express from "express";
import {
  registercontroller,
  logincontroller,
  testcontroller,
} from "../controller/authcontroller.js";
import { requireSignIn, isAdmin } from "../middlwares/authmiddlwar.js";
// router object
const router = express.Router();

// routing
// register || method POST
router.post("/register", registercontroller);
// Login ||  method POST
router.post("/login", logincontroller);
// test router ,middllware
router.get("/test", requireSignIn, testcontroller);
// Protected routes auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).json({ ok: true });
});

export default router;
