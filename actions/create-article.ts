"use server";
import { auth } from "@clerk/nextjs/server";

import { z } from "zod";
import { redirect } from "next/navigation";

const createArticleSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
});
type createArticleFormState = {
  errors: {
    title?: string[];
    category?: string[];
    featuredImage?: string[];
    content?: string[];
    formErrors?: string[];
  };
};
export const createArticle = async (
  prevState: createArticleFormState,
  FormData: FormData
): Promise<createArticleFormState> => {
  const result = createArticleSchema.safeParse({
    title: FormData.get("title"),
    category: FormData.get("category"),
    content: FormData.get("content"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const { userId } = await auth();
  if (!userId) {
    return {
      errors: {
        formErrors: ["You have to login first"],
      },
    };
  }
  redirect("/dashboard");
};
