import api from "./api";

export const auth = {
  login: async (username, password) => {
    const response = await api.post("/auth/login", { username, password });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
  register: async (username, password) => {
    const response = await api.post("/auth/register", { username, password });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  },
};
