import { Router } from "express";
import { z } from "zod";
import { getProductById, getProducts } from "@/controllers/product.controller";
import { entityIdSchema } from "@/dtos/common.dto";
import { productQuerySchema } from "@/dtos/product.dto";
import { validate } from "@/middleware/validate";

const idParamSchema = z.object({ id: entityIdSchema });

export const productRouter = Router();

productRouter.get("/", validate(productQuerySchema, "query"), getProducts);
productRouter.get("/:id", validate(idParamSchema, "params"), getProductById);
