import axios from "axios";

const BASE_API_URL = "https://667fef4a56c2c76b495a96e9.mockapi.io/api/v1/products";

export interface ProductResponse {
    product_name: string
    price: string
    rating: number
    brand: string
    availability: string
    id: string
}

export const getProducts = async (): Promise<ProductResponse[]> => {
    const response = await axios({
        method: "GET",
        url: BASE_API_URL,
    });

    return response.data;
};

export const updateProduct = async (id: string, product: ProductResponse): Promise<ProductResponse> => {
    const response = await axios({
        method: "PUT",
        url: `${BASE_API_URL}/${id}`,
        data: product,
    });

    return response.data;
}
