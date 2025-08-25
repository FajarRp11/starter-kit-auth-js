"use server";
import { RegisterSchema } from "./zod";
import { hashSync } from "bcryptjs";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import z from "zod";

export const signUpCredentials = async (
  prevData: unknown,
  formData: FormData
) => {
  const validatedData = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedData.success) {
    return {
      error: z.flattenError(validatedData.error).fieldErrors,
    };
  }

  const { name, email, password } = validatedData.data;
  const hashedPassword = hashSync(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log("User created:", user);
  } catch (error) {
    console.log("Error creating user:", error);
    return { error: "User already exists" };
  }
  return redirect("/admin/dashboard");
};
