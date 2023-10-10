import { z } from "zod";

export const UserSchema = z.object({
  completeName: z.string({ required_error: "CompleteName is Required" }),
  rol: z.string({ required_error: "Rol is Required" }),
  img_profile: z.string({ required_error: "Image is required" }).optional(),
  user: z
    .string({ required_error: "User is Required" })
    .min(4, { message: "Minimum User 4 Characters" })
    .max(20, { message: "Maximum User 20 Characters" }),
  password: z.string({ required_error: "Password is Required" }).min(6, {
    message: "Password with minimum 6 characters",
  }),
});

export const loginUserSchema = z.object({
  user: z
    .string({ required_error: "User is Required" })
    .min(4, { message: "Minimum User 4 Characters" })
    .max(20, { message: "Maximum User 20 Characters" }),
  password: z.string({ required_error: "Password is Required" }).min(6, {
    message: "Password with minimum 6 characters",
  }),
});
