import { z } from "zod";

export const ReportSchema = z.object({
  user_id: z.string({ required_error: "User_id is Required" }).nullable(false),
  indicators_id: z
    .string({ required_error: "Indicators_id is Required" })
    .nullable(false),
  description: z
    .string({ required_error: "Description is Required" })
    .min(10, { message: "Minimum Description 10 Characters" })
    .nullable(false),
  fecha_expedited: z
    .string({ required_error: "Fecha_Expedited is Required" })
    .datetime({ required_error: "Invalid Fecha_Expedited" })
    .nullable(false),
});
