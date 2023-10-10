import { z } from "zod";

export const ReportSchema = z.object({
  user_id: z
    .string({ required_error: "User_id is Required" })
    .uuid({ message: "Invalid User_id" })
    .nullable(false)
    .trim(),
  indicators_id: z
    .string({ required_error: "Indicators_id is Required" })
    .uuid({ message: "Invalid Indicators_id" })
    .nullable(false)
    .trim(),
  description: z
    .string({ required_error: "Description is Required" })
    .min(10, { message: "Minimum Description 10 Characters" })
    .nullable(false)
    .trim(),
  fecha_expedited: z
    .string({ required_error: "Fecha_Expedited is Required" })
    .nullable(false)
    .trim(),
});
