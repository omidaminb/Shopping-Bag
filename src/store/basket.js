import { create } from "zustand";

const useBasket = create((set, get) => ({
  //data
  items: [
    // title , proce , quantity . image
  ],
  invoice: {
    totalPrice: 0,
    deliveryCost: 0,
    discount: 0,
  },
  //actions
  actions: {
    addToBasket: (payload) => {
      const alreadyExist = get().items.some((item) => item.id === payload.id);

      if (!alreadyExist) {
        set((state) => ({
          items: [...state.items, { ...payload, quantity: 1 }],
          invoice: {
            totalPrice: state.invoice.totalPrice + payload.price,
            deliveryCost: 0,
            discount: 0,
          },
        }));
      } else {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }),
          invoice: {
            totalPrice: state.invoice.totalPrice + payload.price,
            deliveryCost: 0,
            discount: 0,
          },
        }));
      }
      // console.log(get().items);
    },
    removeFromBasket: (payload) => {
      const alreadyExist = get().items.some((item) => item.id === payload.id);
      if (alreadyExist) {
        set((state) => {
          const updatedItems = state.items
            .map((item) => {
              if (item.id === payload.id) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            })
            .filter((item) => item.quantity > 0);
          return {
            items: updatedItems,
            invoice: {
              totalPrice: state.invoice.totalPrice - payload.price,
              deliveryCost: 0,
              discount: 0,
            },
          };
        });
      }
      // console.log(get().items);
    },
  },
}));

export default useBasket;
