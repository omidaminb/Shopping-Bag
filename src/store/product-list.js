import { create } from "zustand";

// ! روش اصولی ای نیست بهتره از ابزارای ریکت استفاده کنیم مثل react query کنیم
const useProductList = create((set) => ({
  productList: [],
  actions: {
    addList: (payload) => {
      set(() => ({
        productList: payload,
      }));
    },
  },
}));

export default useProductList;
