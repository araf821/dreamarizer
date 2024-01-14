import { z } from "zod";

export const DreamFormValidator = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 character in length." })
    .max(64, { message: "Too long." }),
  dream: z
    .string()
    .min(50, { message: "Must be at least 50 characters in length." })
    .max(4096, "Too long."),
  context: z.optional(z.string()),
});
