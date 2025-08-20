```typescript
// types/index.ts

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    images: string[];
    inStock: boolean;
    rating: number;
    reviews: Review[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Review {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    totalAmount: number;
    orderDate: Date;
    status: OrderStatus;
}

export enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

export interface Payment {
    id: string;
    orderId: string;
    amount: number;
    paymentDate: Date;
    paymentMethod: PaymentMethod;
    status: PaymentStatus;
}

export enum PaymentMethod {
    CreditCard = "Credit Card",
    PayPal = "PayPal",
    BankTransfer = "Bank Transfer",
}

export enum PaymentStatus {
    Pending = "Pending",
    Completed = "Completed",
    Failed = "Failed",
}

export interface WishlistItem {
    productId: string;
    userId: string;
}

export interface Wishlist {
    userId: string;
    items: WishlistItem[];
}
```