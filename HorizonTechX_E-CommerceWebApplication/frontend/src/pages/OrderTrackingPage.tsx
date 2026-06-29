import { EmptyState } from "../components/EmptyState";
import { orders } from "../data/orders";
import type { Navigate } from "../types/types";

export function OrderTrackingPage({ navigate }: { navigate: Navigate }) {
  const statusLabels: Record<string, string> = {
    processing: "Processing",
    shipped: "Shipped",
    "in-transit": "In Transit",
    delivered: "Delivered",
    cancelled: "Cancelled",
  };

  if (orders.length === 0) {
    return (
      <section className="order-tracking-page">
        <div className="page-heading">
          <p className="eyebrow">Orders</p>
          <h1>Order tracking</h1>
        </div>
        <EmptyState
          title="No orders yet"
          text="Place an order and it will appear here for tracking."
        >
          <button type="button" onClick={() => navigate("/")}>
            Browse products
          </button>
        </EmptyState>
      </section>
    );
  }

  return (
    <section className="order-tracking-page">
      <div className="page-heading">
        <p className="eyebrow">Orders</p>
        <h1>Order tracking</h1>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <article className="order-card" key={order.id}>
            <header className="order-header">
              <div>
                <strong className="order-id">{order.id}</strong>
                <span className="order-date">{order.date}</span>
              </div>
              <span className="order-total">${order.total.toFixed(2)}</span>
            </header>

            <div className="order-table-wrapper">
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Delivery Address</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.productId}>
                      <td className="order-image-cell">
                        <img src={item.productImage} alt={item.productName} />
                      </td>
                      <td className="order-name-cell">{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td className="order-address-cell">
                        {item.deliveryAddress}
                      </td>
                      <td>
                        <span
                          className={`status-badge status-${item.deliveryStatus}`}
                        >
                          {statusLabels[item.deliveryStatus]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
