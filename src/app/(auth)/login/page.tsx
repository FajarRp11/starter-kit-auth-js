import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Login to your account.
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Button
          asChild
          variant="link"
          className="p-0 font-semibold text-green-600 hover:text-green-500"
        >
          <Link href="/register">Sign up</Link>
        </Button>
      </p>

      <LoginForm />

      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">or sign up with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors">
          <FaGithub /> Github
        </Button>
        <Button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors">
          <FaGoogle /> Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
