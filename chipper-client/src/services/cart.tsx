import api from "./api";

export const cart = {
  addToCart: async (productId) => {
    const response = await api.post("/cart/add", { productId });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
  removeFromCart: async (productId) => {
    const response = await api.delete("/cart/remove", { productId });

    if (response.status === 204) {
      return true;
    } else {
      throw new Error(response.data.message);
    }
  },
  getProductsInCart: async () => {
    const response = await api.get("/cart/products");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
};
