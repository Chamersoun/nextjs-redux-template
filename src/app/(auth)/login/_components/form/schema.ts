import * as yup from "yup";

import { ValidationTexts } from "@/constants/validationTexts";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required(ValidationTexts.Required)
    .email(ValidationTexts.IncorrectEmail),
  password: yup
    .string()
    .required(ValidationTexts.Required)
    .test("len", ValidationTexts.IncorrectPassword, (val) => val.length > 8),
});

export default signInSchema;
