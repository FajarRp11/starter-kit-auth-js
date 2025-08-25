"use client";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import InputError from "../ui/input-error";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-4 space-y-3">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <InputError message="Name is required." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          E-mail Address
        </Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="E-mail address"
          className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <InputError message="Email is required." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </Label>
        <div className="relative">
          <Input
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <InputError message="Password is required." />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="confirm-password"
          className="text-sm font-medium text-gray-700"
        >
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            name="confirm-password"
            id="confirm-password"
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <InputError message="Password does not match." />
      </div>
      <Button
        type="submit"
        className="w-full py-3 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
