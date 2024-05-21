import { Router } from "express";
import { validateOtp } from "../controller/otpController.js";
const router = Router();

router.post("/otp/validate", validateOtp);

export default router;
