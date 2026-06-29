import bcrypt from "bcrypt";
import users from "./data/users";
import { User } from "@/models/User";

export async function seedUsers() {
  await User.deleteMany({});

  const hashedUsers = await Promise.all(
    users.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    })),
  );

  await User.insertMany(hashedUsers);

  console.log("users seeded successfully.");
}
