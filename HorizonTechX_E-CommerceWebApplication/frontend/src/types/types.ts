export type Product = {
  id: string
  name: string
  brand: string
  parentCategory: string
  category: string
  price: number
  rating: number
  image: string
  description: string
  details: string[]
  featured?: boolean
  newest?: boolean
}

export type CartItem = {
  productId: string
  quantity: number
}

export type Navigate = (path: string) => void

export type DeliveryStatus = "processing" | "shipped" | "in-transit" | "delivered" | "cancelled"

export type OrderItem = {
  productId: string
  productName: string
  productImage: string
  quantity: number
  price: number
  deliveryAddress: string
  deliveryStatus: DeliveryStatus
}

export type Order = {
  id: string
  date: string
  items: OrderItem[]
  total: number
}
