import { z } from "zod";

export const DreamFormValidator = z.object({
  dream: z
    .string()
    .min(50, { message: "Must be at least 50 characters in length." })
    .max(4096, "Too long."),
  context: z.optional(z.string()),
});
