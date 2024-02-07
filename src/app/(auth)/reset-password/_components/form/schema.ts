import * as yup from "yup";

import { ValidationTexts } from "@/constants/validationTexts";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(ValidationTexts.Required)
    .test("len", ValidationTexts.IncorrectPassword, (val) => val.length > 8),
  password_confirmation: yup
    .string()
    .required(ValidationTexts.Required)
    .oneOf([yup.ref("password")], ValidationTexts.PasswordsDoNotMatch),
});

export default resetPasswordSchema;
