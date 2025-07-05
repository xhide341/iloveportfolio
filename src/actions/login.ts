"use server";

import { auth } from "~/lib/auth";
import { redirect } from "next/navigation";
import { loginSchema } from "~/validations";
import * as z from "zod";

export type LoginResponse = {
  error?: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
  success?: string;
};

export async function signIn(
  formData: z.infer<typeof loginSchema>,
): Promise<LoginResponse> {
  const validatedFields = loginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: { _form: ["Invalid form data."] } };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await auth.api.signInEmail({
      body: { email, password },
      asResponse: true,
    });

    if (!response.ok) {
      const errorJson = await response.json();
      return {
        error: { _form: [errorJson.error?.message || "Login failed."] },
      };
    }

    redirect("/home");
  } catch (err) {
    console.error("Login error:", err);
    return { error: { _form: ["An unexpected error occurred."] } };
  }

  // return { success: "User logged in successfully!" };
}
