import { z } from "zod";
import { entityIdSchema } from "./common.dto";

const booleanQuerySchema = z
  .string()
  .trim()
  .toLowerCase()
  .transform((value, ctx) => {
    if (value === "true") return true;
    if (value === "false") return false;

    ctx.addIssue({
      code: "custom",
      message: "Expected true or false",
    });
    return z.NEVER;
  });

export const productQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(12),
  search: z.string().trim().max(120).optional(),
  brand: entityIdSchema.optional(),
  category: entityIdSchema.optional(),
  parentCategory: entityIdSchema.optional(),
  featured: booleanQuerySchema.optional(),
  newest: booleanQuerySchema.optional(),
  sort: z
    .enum(["newest", "price_asc", "price_desc", "rating_desc", "name_asc"])
    .default("newest"),
});

export type ProductQueryDto = z.infer<typeof productQuerySchema>;
