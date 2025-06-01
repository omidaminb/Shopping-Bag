import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useBasket = create(
  persist(
    (set, get) => ({
      // data
      items: [],
      invoice: {
        totalPrice: 0,
        deliveryCost: 0,
        discount: 0,
      },
      // actions
      actions: {
        addToBasket: (payload) => {
          const alreadyExist = get().items.some(
            (item) => item.id === payload.id
          );

          if (!alreadyExist) {
            // new product
            set((state) => ({
              items: [...state.items, { ...payload, quantity: 1 }],
              invoice: {
                totalPrice: Number(
                  (
                    Number(state.invoice.totalPrice) + Number(payload.price)
                  ).toFixed(2)
                ),
                deliveryCost: 0,
                discount: 0,
              },
            }));
          } else {
            // product exist
            set((state) => {
              const updatedItems = state.items.map((item) => {
                if (item.id === payload.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });

              // total price
              let newTotalPrice = 0;
              updatedItems.forEach((item) => {
                newTotalPrice += Number(item.price) * item.quantity;
              });

              return {
                items: updatedItems,
                invoice: {
                  totalPrice: Number(newTotalPrice.toFixed(2)),
                  deliveryCost: 0,
                  discount: 0,
                },
              };
            });
          }
        },
        removeFromBasket: (payload) => {
          const alreadyExist = get().items.some(
            (item) => item.id === payload.id
          );
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

              let newTotalPrice = 0;
              updatedItems.forEach((item) => {
                newTotalPrice += Number(item.price) * item.quantity;
              });
              return {
                items: updatedItems,
                invoice: {
                  totalPrice: Number(newTotalPrice.toFixed(2)),
                  deliveryCost: 0,
                  discount: 0,
                },
              };
            });
          }
        },
        removecompeleteFromBasket: (payload) => {
          set((state) => {
            const updatedItems = state.items.filter(
              (item) => item.id !== payload.id
            );

            let newTotalPrice = 0;
            updatedItems.forEach((item) => {
              newTotalPrice += Number(item.price) * item.quantity;
            });

            return {
              items: updatedItems,
              invoice: {
                totalPrice: Number(newTotalPrice.toFixed(2)),
                deliveryCost: 0,
                discount: 0,
              },
            };
          });
        },
        clearAllBasket: () => {
          set({
            items: [],
            invoice: {
              totalPrice: 0,
              deliveryCost: 0,
              discount: 0,
            },
          });
        },
      },
    }),
    {
      name: "shopping-cart",
      storage: createJSONStorage(() => localStorage),
      version: 1,
      // partialize: (state) => ({
      //   items: state.items,
      //   invoice: state.invoice,
      // }),
      // یا
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["actions"].includes(key))
        ),
    }
  )
);

export default useBasket;
