"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import resetPasswordSchema from "@/app/(auth)/reset-password/_components/form/schema";
import { ResetPasswordFormData } from "@/app/(auth)/reset-password/_components/form/types";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import Button from "@/components/button";
import { ControlledInput } from "@/components/input";
import Urls from "@/constants/urls";

import "./styles.scss";

export default function ResetPasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  useEffect(() => {
    if (params?.has("error")) {
      sessionStorage.setItem("resetPasswordError", "true");
      router.push(Urls.Login);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFormSubmit = async (data: ResetPasswordFormData) => {
    setSubmitting(true);
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ error: { message: "Email not found" } });
      }, 1000);
    });

    // @ts-ignore
    if (response.error) {
      setSubmitting(false);
      setError("password", {
        type: "manual",
        // @ts-ignore
        message: response.error?.message,
      });
    } else {
      sessionStorage.setItem("resetPasswordSuccess", "true");
      router.push(Urls.Login);
    }
  };

  return (
    <form className="reset-password-form" onSubmit={handleSubmit(onFormSubmit)}>
      <ControlledInput
        control={control}
        errors={errors}
        name="password"
        label="Enter new password"
        placeholder="Min 8 characters"
        type="password"
        containerStyle="reset-password-form__field"
      />

      <ControlledInput
        control={control}
        errors={errors}
        name="password_confirmation"
        label="Confirm new password"
        placeholder="Min 8 characters"
        type="password"
        containerStyle="reset-password-form__field"
      />

      <Button
        buttonText="Save new password"
        type="submit"
        containerStyle="reset-password-form__submit-btn"
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
