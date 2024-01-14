"use server";

import { currentUser } from "@/lib/utils";
import { DreamFormValidator } from "@/lib/validators";
import { z } from "zod";

export const dreamSubmission = async (
  values: z.infer<typeof DreamFormValidator>,
) => {
  const user = await currentUser();
  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const validatedFields = DreamFormValidator.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Failed to validate the provided inputs.",
    };
  }
};
