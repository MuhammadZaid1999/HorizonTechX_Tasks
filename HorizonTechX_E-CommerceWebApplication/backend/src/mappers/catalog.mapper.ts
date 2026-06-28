import type { BrandDocument } from "@/models/Brand";
import type { CategoryDocument } from "@/models/Category";
import type { ProductDocument } from "@/models/Product";

type ProductLike = ProductDocument & { createdAt?: Date; updatedAt?: Date };
type CategoryLike = CategoryDocument & { createdAt?: Date; updatedAt?: Date };

export function mapBrand(brand: BrandDocument) {
  return {
    name: brand.name,
  };
}

export function mapCategory(category: CategoryLike) {
  return {
    name: category.name,
    parentId: category.parentId ?? null,
  };
}

export function mapProduct(
  product: ProductLike,
  brandsById: Map<string, BrandDocument>,
  categoriesById: Map<string, CategoryDocument>,
) {
  const brand = brandsById.get(product.brand._id.toString());
  const category = categoriesById.get(product.category._id.toString());
  const parentCategory = category?.parentId
    ? categoriesById.get(category.parentId.toString())
    : undefined;

  return {
    name: product.name,
    brand: brand?.name ?? product.brand,
    brandId: product.brand,
    parentCategory: parentCategory?.name ?? "",
    parentCategoryId: category?.parentId ?? null,
    category: category?.name ?? product.category,
    categoryId: product.category,
    price: product.price,
    rating: product.rating,
    image: product.image,
    description: product.description,
    details: product.details,
  };
}
