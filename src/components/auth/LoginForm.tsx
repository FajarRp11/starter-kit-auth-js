"use client";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import InputError from "../ui/input-error";
import { useActionState } from "react";
import { signUpCredentials } from "../../../lib/action";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full py-3 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
      disabled={pending}
    >
      {pending ? "Loading..." : "Login"}
    </Button>
  );
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Type inference for state will be: null | { error: ... }
  const [state, formAction] = useActionState(signUpCredentials, null);
  console.log(state);

  const errorObject =
    state &&
    typeof state === "object" &&
    "error" in state &&
    typeof state.error === "object"
      ? state.error
      : null;
  return (
    <form className="mt-4 space-y-3" action={formAction}>
      {state?.error && (
        <Alert className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <AlertTitle className="font-bold flex items-center gap-2">
            <AlertCircle className="size-4" />
            Error
          </AlertTitle>
          <AlertDescription>
            {typeof state.error === "string" && state.error}
          </AlertDescription>
        </Alert>
      )}
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
        {errorObject?.email && (
          <InputError message={errorObject.email.join(", ")} />
        )}
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
        {errorObject?.password && (
          <InputError message={errorObject.password.join(", ")} />
        )}
      </div>
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
