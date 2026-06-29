import mongoose from "mongoose";
import { connectDB } from "@/config/db";
import { seedBrands } from "./brands-seed";
import { seedCategories } from "./categories-seed";
import { seedProducts } from "./products-seed";
import { seedUsers } from "./users-seed";
import { seedOrders } from "./order-seed";

async function runSeeder() {
  await connectDB();

  // brands and categories
  const brandMap = await seedBrands();
  const categoryMap = await seedCategories();
  
  // products
  await seedProducts(brandMap, categoryMap);

  // users
  await seedUsers();
  
  //orders
  await seedOrders();

  console.log("all seeders completed successfully.");

  await mongoose.disconnect();
}

runSeeder().catch((err) => {
  console.error(err);
  process.exit(1);
});
