import LoginForm from "@/app/(auth)/login/_components/form";
import { titleFont } from "@/assets/fonts";

export default function Login() {
  return (
    <div className="auth-page">
      <h1 className={titleFont.className}>Log In</h1>
      <LoginForm />
    </div>
  );
}
