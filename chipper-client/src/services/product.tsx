import api from "./api";

export const product = {
  getProducts: async () => {
    const response = await api.get("/products");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
  getProductById: async (productId) => {
    const response = await api.get(`/products/${productId}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
};
