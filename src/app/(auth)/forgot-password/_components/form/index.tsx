"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useForm } from "react-hook-form";

import forgotPasswordSchema from "@/app/(auth)/forgot-password/_components/form/schema";
import { ForgotPasswordFormData } from "@/app/(auth)/forgot-password/_components/form/types";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import Button from "@/components/button";
import { ControlledInput } from "@/components/input";
import { SnackTexts } from "@/constants/snackTexts";
import Urls from "@/constants/urls";
import { notifySuccess } from "@/utils/toasts";

import "./styles.scss";

export default function ForgotPasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFormSubmit = async (data: ForgotPasswordFormData) => {
    setSubmitting(true);
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ error: { message: "Email not found" } });
      }, 1000);
    });

    // @ts-ignore
    if (response.error) {
      setSubmitting(false);
      setError("email", {
        type: "manual",
        // @ts-ignore
        message: response.error?.message,
      });
    } else {
      router.push(Urls.Login);
      notifySuccess(SnackTexts.PasswordResetEmailSentSuccess);
    }
  };

  return (
    <form
      className="forgot-password-form"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <ControlledInput
        control={control}
        errors={errors}
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        containerStyle="forgot-password-form__field"
      />

      <Button
        buttonText="Reset password"
        type="submit"
        containerStyle="forgot-password-form__submit-btn"
        disabled={submitting}
        loading={submitting}
      />

      <Link className="back-link" href={Urls.Login}>
        <ArrowLeftIcon />
        Back to login
      </Link>
    </form>
  );
}
