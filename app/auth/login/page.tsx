import React from "react";
// import { RegisterForm } from "@/components/register";
import { LoginForm } from "@/components/login";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
