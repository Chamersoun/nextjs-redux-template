import ResetPasswordForm from "@/app/(auth)/reset-password/_components/form";
import { titleFont } from "@/assets/fonts";

export default function ResetPassword() {
  return (
    <div className="auth-page">
      <h1 className={titleFont.className}>Reset your password</h1>
      <div className="auth-page__subtitle">
        Please choose your new password.
      </div>
      <ResetPasswordForm />
    </div>
  );
}
