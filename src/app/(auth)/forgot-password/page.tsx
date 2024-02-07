import ForgotPasswordForm from "@/app/(auth)/forgot-password/_components/form";
import { titleFont } from "@/assets/fonts";

export default function ForgotPassword() {
  return (
    <div className="auth-page">
      <h1 className={titleFont.className}>Forgot password</h1>
      <div className="auth-page__subtitle">
        Please enter the email you used to register
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
