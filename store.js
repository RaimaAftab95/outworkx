import toast from "react-hot-toast";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthStore = create()(
  devtools((set) => ({
    auth: null,
    setAuth: (auth) => set({ auth }),
    logout: () => {
      localStorage.removeItem("auth");
      toast.success("User Logout Successfully.");
      return set({ auth: null });
    },
  }))
);
