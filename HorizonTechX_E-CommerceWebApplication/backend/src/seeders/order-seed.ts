import { Order } from '@/models/Order';
import { User } from '@/models/User';
import { Product } from '@/models/Product';
import orders from "./data/orders"

export async function seedOrders() {
  await Order.deleteMany({});

    const users = await User.find().limit(5);
    const products = await Product.find().limit(5);

    const placedOrders = orders.map((order: any, index: number) => ({
        ...order,
        userId: users[index]?._id,
        productId: products[index]?._id,
        price: products[index]?.price * order.quantity
    }));


    await Order.insertMany(placedOrders);

    console.log('orders seeded successfully.');
}
