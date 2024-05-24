import { body, validationResult } from "express-validator";
import User from "../../Models/User/index.js";

function userRegistrationValidation() {
  return [
    body("name", "Name Can Not Be Empty").isLength({ min: 2 }),
    body("email", "Email Is Not Valid")
      .isEmail()
      .custom(async (email) => {
        const user = await User.findOne({ email });
        if (!email) {
          throw new Error("Email IS Already In Use");
        }
        return true;
      }),
    body("password", "Password must be between 5 and 40 characters")
      .notEmpty()
      .isLength({
        min: 5,
        max: 40,
      }),
    body("role")
      .optional()
      .isIn(["Admin", "Doctor", "Nurse", "Receptionist", "Patient"])
      .withMessage("Invalid role"),
  ];
}

function errorMiddleware(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ error: errors.array() });
}

export { userRegistrationValidation, errorMiddleware };
