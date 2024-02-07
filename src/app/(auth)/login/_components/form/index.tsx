"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import signInSchema from "@/app/(auth)/login/_components/form/schema";
import { SignInFormData } from "@/app/(auth)/login/_components/form/types";
import Button from "@/components/button";
import { ControlledInput } from "@/components/input";
import { SnackTexts } from "@/constants/snackTexts";
import Urls from "@/constants/urls";
import {
  selectAuthMeta,
  selectUser,
  signInAsync,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { notifyError, notifySuccess } from "@/utils/toasts";

import "./styles.scss";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authMeta = useSelector(selectAuthMeta);
  const user = useSelector(selectUser);

  const submitting = useMemo(() => {
    return authMeta.status === "loading";
  }, [authMeta.status]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (sessionStorage.getItem("resetPasswordError")) {
      sessionStorage.removeItem("resetPasswordError");
      notifyError(SnackTexts.LinkExpired);
    }

    if (sessionStorage.getItem("resetPasswordSuccess")) {
      sessionStorage.removeItem("resetPasswordSuccess");
      notifySuccess(SnackTexts.PasswordResetSuccess);
    }
  }, []);

  useEffect(() => {
    if (user) {
      router.push(Urls.Dashboard);
    }
  }, [user]);

  useEffect(() => {
    if (authMeta.error) {
      setError("email", { message: authMeta.error });
    }
  }, [authMeta.error]);

  const onFormSubmit = async (data: SignInFormData) => {
    dispatch(signInAsync(data));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onFormSubmit)}>
      <ControlledInput
        control={control}
        errors={errors}
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        containerStyle="login-form__field"
      />

      <div className="login-form__password-wrapper">
        <ControlledInput
          control={control}
          errors={errors}
          name="password"
          label="Password"
          placeholder="Min 8 characters"
          type="password"
          containerStyle="login-form__field"
        />

        <Link
          className="login-form__forgot-password"
          href={Urls.ForgotPassword}
        >
          Forgot password?
        </Link>
      </div>

      <Button
        buttonText="Sign In"
        type="submit"
        containerStyle="login-form__submit-btn"
        disabled={submitting}
        loading={submitting}
      />
    </form>
  );
}
