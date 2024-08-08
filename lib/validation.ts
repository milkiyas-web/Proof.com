import { headers } from "next/headers";
import { z } from "zod";

export const UserFormValidation = z.object({
    space: z.string()
    .min(1, "Space is required")
    .max(50, "Space name must be at most 50 characters"),
    header: z.string()
    .min(1, "Header is required")
    .max(50, "Header must be at most 50 characters"),
    message: z.string()
    .min(1, "Message is required")
    .max(50, "Message must be at most 50 characters")
  })