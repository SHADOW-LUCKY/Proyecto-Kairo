import { z } from "zod";

export const registerUserSchema = {
  completeName: z.string({ required_error: "xd" }),
  rol: z.string({ required_error: "idk" }),
  img_profile: z.string({}),
  user: z.string({}).min(4, { message: "sapo" }).max(20, { message: "max 20" }),
  password,
};
