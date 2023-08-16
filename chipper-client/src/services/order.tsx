import api from "./api";

export const order = {
  createOrder: async () => {
    const response = await api.post("/orders");

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
};
