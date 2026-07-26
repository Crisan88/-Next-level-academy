import type { Metadata } from "next";
import LoginForm from "../components/LoginForm";

export const metadata: Metadata = {
  title: "Login – Next Level Academy",
  description: "Melden Sie sich im Admin-Login der Next Level Academy an.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://nextlevelacademy-fussball.de/login",
  },
};

export default function LoginPage() {
  return <LoginForm />;
}