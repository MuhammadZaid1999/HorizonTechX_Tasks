import { model, Schema, type InferSchemaType } from "mongoose";

export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },

    // Price at the time the order was placed
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    orderStatus: {
      type: String,
      enum: Object.values(OrderStatus),
      default: OrderStatus.PENDING,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes
orderSchema.index({ createdAt: -1 });
orderSchema.index({ userId: 1, createdAt: -1 });

export type OrderDocument = InferSchemaType<typeof orderSchema>;

export const Order = model("Order", orderSchema);
