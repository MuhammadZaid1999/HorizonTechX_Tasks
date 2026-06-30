import { z } from "zod";
import { entityIdSchema } from "./common.dto";

export const categoryQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  parentId: entityIdSchema.nullish().default(null),
  search: z.string().trim().max(120).optional(),
});

export type CategoryQueryDto = z.infer<typeof categoryQuerySchema>;
