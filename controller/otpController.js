import catchAsync from "../utils/catchAsync.js";

const validateOtp = catchAsync(async (req, res) => {
  const { otp } = req.body;

  if (otp.length !== 6) {
    res.status(400).json({ message: "Invalid OTP: OTP should be of length 6" });
    return;
  }

  if (parseInt(otp.split("")[otp.length - 1]) === 7) {
    res.status(400).json({ message: "Invalid OTP: OTP is not valid" });
    return;
  }

  res.status(200).json({ message: "OTP Verified successfully" });
});

export { validateOtp };
