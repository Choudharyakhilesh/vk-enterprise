import { z } from "zod";

export const ContactFormSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "First Name is Requird" })
    .max(50, { message: "First name must be less than 50 characters" }),
  last_name: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is Requird" })
    .email({ message: "Please enter a valid email address" }),
  mobile: z
    .string()
    .min(10, { message: "Phone Number is Requird" })
    .regex(/^[0-9+\-\s()]*$/, { message: "Please enter a valid phone number" }),

  message: z.string().optional(),
});
