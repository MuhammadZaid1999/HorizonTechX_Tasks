import type { Request, Response } from "express";
import type { ProductQueryDto } from "@/dtos/product.dto";
import { Brand } from "@/models/Brand";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { buildPaginationMeta, getSkip } from "@/utils/pagination";

export async function getProducts(request: Request, response: Response) {
  const query = request.query as unknown as ProductQueryDto;
  const filter: Record<string, unknown> = {};

  if (query.search) {
    filter.$or = [
      { name: { $regex: query.search, $options: "i" } },
      { description: { $regex: query.search, $options: "i" } },
    ];
  }

  if (query.brand) filter.brand = query.brand;
  if (query.category) filter.category = query.category;
  if (query.featured !== undefined) filter.featured = query.featured;
  if (query.newest !== undefined) filter.newest = query.newest;

  if (query.parentCategory) {
    const childCategories = await Category.find({
      parentId: query.parentCategory,
    })
      .select("id")
      .lean();
    filter.category = { $in: childCategories.map((category) => category._id) };
  }

  const sort = getProductSort(query.sort);
  const [products, total] = await Promise.all([
    Product.find(filter)
      .sort(sort)
      .skip(getSkip(query.page, query.limit))
      .limit(query.limit)
      .lean(),
    Product.countDocuments(filter),
  ]);

  return response.json({
    data: products,
    meta: buildPaginationMeta(query.page, query.limit, total),
  });
}

export async function getProductById(request: Request, response: Response) {
  const { id } = request.params;
  const product = await Product.findOne({ _id: id })
    .populate("brand")
    .populate("category")
    .lean();

  if (!product) {
    return response.status(404).json({ message: "Product not found" });
  }

  return response.json({
    data: product,
  });
}

function getProductSort(sort: ProductQueryDto["sort"]): Record<string, 1 | -1> {
  if (sort === "price_asc") return { price: 1 };
  if (sort === "price_desc") return { price: -1 };
  if (sort === "rating_desc") return { rating: -1 };
  if (sort === "name_asc") return { name: 1 };
  return { createdAt: -1 };
}
