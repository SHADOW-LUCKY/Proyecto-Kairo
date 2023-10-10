import { z } from "zod";

export const UserSchema = {
  completeName: z.string({ required_error: "CompleteName is Required" }).trim(),
  rol: z.string({ required_error: "Rol is Required" }).trim(),
  img_profile: z.string({ required_error }).trim().optional(),
  user: z
    .string({ required_error: "User is Required" })
    .min(4, { message: "Minimum User 4 Characters" })
    .max(20, { message: "Maximum User 20 Characters" })
    .trim(),
  password: z
    .string({ required_error: "Password is Required" })
    .min(6, {
      message: "Password with minimum 6 characters",
    })
    .trim(),
};

export const loginUserSchema = {
  user: z
    .string({ required_error: "User is Required" })
    .min(4, { message: "Minimum User 4 Characters" })
    .max(20, { message: "Maximum User 20 Characters" })
    .trim(),
  password: z
    .string({ required_error: "Password is Required" })
    .min(6, {
      message: "Password with minimum 6 characters",
    })
    .trim(),
};
