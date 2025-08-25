import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900">Create an account.</h2>
      <p className="mt-2 text-sm text-gray-600">
        Already have an account?{" "}
        <Button
          asChild
          variant="link"
          className="p-0 font-semibold text-green-600 hover:text-green-500"
        >
          <Link href="/login">Sign in</Link>
        </Button>
      </p>

      <RegisterForm />

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

export default RegisterPage;
