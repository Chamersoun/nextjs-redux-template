import * as yup from "yup";

import { ValidationTexts } from "@/constants/validationTexts";

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required(ValidationTexts.Required)
    .email(ValidationTexts.IncorrectEmail),
});

export default forgotPasswordSchema;
