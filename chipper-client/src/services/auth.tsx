import { api } from "./api";

export const auth = {
  login: async (username: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { username, password });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error("An error occurred during login.");
    }
  },
  register: async (username: string, password: string) => {
    try {
      const response = await api.post("/auth/register", { username, password });

      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error("An error occurred during registration.");
    }
  },
  getUserProfile: async () => {
    try {
      const response = await api.get("/auth/user-profile");

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error("An error occurred while fetching user profile.");
    }
  },
};
