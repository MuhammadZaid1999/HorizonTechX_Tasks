import type { Order } from "../types/types";

export const orders: Order[] = [
  {
    id: "ORD-1001",
    date: "2026-06-15",
    total: 190,
    items: [
      {
        productId: "woven-weekender-tote",
        productName: "Woven Weekender Tote",
        productImage:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 68,
        deliveryAddress: "123 Main St, Apt 4B, New York, NY 10001",
        deliveryStatus: "delivered",
      },
      {
        productId: "calm-clay-diffuser",
        productName: "Calm Clay Diffuser",
        productImage:
          "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
        quantity: 2,
        price: 44,
        deliveryAddress: "123 Main St, Apt 4B, New York, NY 10001",
        deliveryStatus: "delivered",
      },
      {
        productId: "daily-hydration-bottle",
        productName: "Daily Hydration Bottle",
        productImage:
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 32,
        deliveryAddress: "123 Main St, Apt 4B, New York, NY 10001",
        deliveryStatus: "delivered",
      },
    ],
  },
  {
    id: "ORD-1002",
    date: "2026-06-20",
    total: 118,
    items: [
      {
        productId: "modular-desk-lamp",
        productName: "Modular Desk Lamp",
        productImage:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 118,
        deliveryAddress: "456 Oak Ave, San Francisco, CA 94102",
        deliveryStatus: "in-transit",
      },
    ],
  },
  {
    id: "ORD-1003",
    date: "2026-06-25",
    total: 138,
    items: [
      {
        productId: "linen-ease-shirt",
        productName: "Linen Ease Shirt",
        productImage:
          "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 54,
        deliveryAddress: "789 Pine Rd, Austin, TX 78701",
        deliveryStatus: "shipped",
      },
      {
        productId: "canvas-crossbody-pack",
        productName: "Canvas Crossbody Pack",
        productImage:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 46,
        deliveryAddress: "789 Pine Rd, Austin, TX 78701",
        deliveryStatus: "shipped",
      },
      {
        productId: "travel-tech-organizer",
        productName: "Travel Tech Organizer",
        productImage:
          "https://images.unsplash.com/photo-1586553633973-9e96ebcc0ec4?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 38,
        deliveryAddress: "789 Pine Rd, Austin, TX 78701",
        deliveryStatus: "shipped",
      },
    ],
  },
  {
    id: "ORD-1004",
    date: "2026-06-28",
    total: 82,
    items: [
      {
        productId: "ceramic-pour-over-set",
        productName: "Ceramic Pour Over Set",
        productImage:
          "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=80",
        quantity: 1,
        price: 82,
        deliveryAddress: "321 Elm St, Chicago, IL 60607",
        deliveryStatus: "processing",
      },
    ],
  },
];
