import { ProductResponse } from "./api";

// Function to generate mock data
export function generateMockData(count: number = 20): ProductResponse[] {
    return Array.from({ length: count }, (_, i) => ({
        id: (i + 1).toString(),
        product_name: `Product ${i + 1}`,
        price: (10 + Math.random() * 20).toFixed(2).toString(),
        rating: Number((3 + Math.random() * 2).toFixed(1)),
        brand: Math.random() > 0.5 ? "Brand A" : "Brand B",
        availability: Math.random() > 0.3 ? "In Stock" : "Out of Stock",
    }));
}
