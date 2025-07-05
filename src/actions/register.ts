"use server";

import { auth } from "~/lib/auth";
import { redirect } from "next/navigation";
import { registerSchema } from "~/validations";
import * as z from "zod";

export type RegisterResponse = {
  error?: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
  success?: string;
};

export async function signUp(
  formData: z.infer<typeof registerSchema>,
): Promise<RegisterResponse> {
  const validatedFields = registerSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: { _form: ["Invalid form data."] } };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const response = await auth.api.signUpEmail({
      body: { name, email, password },
      asResponse: true,
    });

    if (!response.ok) {
      const errorJson = await response.json();
      return {
        error: { _form: [errorJson.error?.message || "Sign up failed."] },
      };
    }

    redirect("/home");
  } catch (err) {
    console.error("Sign up error:", err);
    return { error: { _form: ["An unexpected error occurred."] } };
  }
}
