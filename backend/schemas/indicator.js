import { z } from "zod";

export const IndicatorSchema = z.object({
  name: z
    .string({ required_error: "Name is Required" })
    .min(1, { message: "Minimum Name 4 Characters" })
    .nullable(false)
    .trim(),
  description: z
    .string({ required_error: "Description is Required" })
    .nullable(false)
    .trim(),
  fecha_init: z
    .string({ required_error: "Fecha_Init is Required" })
    .nullable(false)
    .trim(),
  fecha_end: z
    .string({ required_error: "Fehca_End is Required" })
    .nullable(false)
    .trim(),
  formula: z
    .string({ required_error: "Formula is Required" })
    .nullable(false)
    .trim(),
  frecuency: z
    .string({ required_error: "Frecuency is Required" })
    .nullable(false)
    .trim(),
  completation: z
    .number({ required_error: "Completation is Required" })
    .int()
    .min(0, { message: "Minimum Completation 0 Characters" })
    .max(100, { message: "Maximum Completation 100 Characters" })
    .nullable(false),
  area: z.string({ required_error: "Area is Required" }).nullable(false).trim(),
});
