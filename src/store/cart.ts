import { Coffee } from 'interfaces/coffee'
import { create } from 'zustand'

type Cart = Coffee & { quantity: number }

type CartStoreType = {
  cart: Cart[]
  cartResume: {
    quantity: number
    totalPrice: number
    deliverPrice: number
  }
  addItemToCart: (item: Cart) => void
  removeItemFromCart: (id: number) => void
  changeResume: () => void
  addItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
}

export const useCartStore = create<CartStoreType>((set, get) => ({
  cart: [],
  cartResume: {
    quantity: 0,
    totalPrice: 0,
    deliverPrice: 3.5,
  },
  addItemToCart: (item: Cart) => {
    const cart = get().cart

    const existsInCart = cart.findIndex((c) => c.id === item.id)

    if (existsInCart !== -1) {
      const cartWithoutItemToMutate = cart.filter((c) => c.id !== item.id)
      const itemToMutate = cart[existsInCart]

      set({
        cart: [
          ...cartWithoutItemToMutate,
          { ...itemToMutate, quantity: itemToMutate.quantity + item.quantity },
        ],
      })

      get().changeResume()
    } else {
      set({ cart: [...cart, item] })

      get().changeResume()
    }
  },
  removeItemFromCart: (id: number) => {
    const cart = get().cart

    const cartWithRemovedItem = cart.filter((c) => c.id !== id)

    set({ cart: cartWithRemovedItem })

    get().changeResume()
  },
  changeResume: () => {
    const cartResume = get().cartResume

    const resume = get().cart.reduce(
      (resume, item) => {
        return {
          ...resume,
          quantity: get().cart.length,
          totalPrice: Number(
            (resume.totalPrice + item.quantity * item.price).toFixed(2),
          ),
        }
      },
      { quantity: 0, totalPrice: 0 },
    )

    set({ cartResume: { ...cartResume, ...resume } })
  },
  addItemQuantity: (id: number) => {
    const cartWithAddQuantity = get().cart.map((c) => {
      if (c.id === id) {
        return { ...c, quantity: c.quantity + 1 }
      }

      return c
    })

    set({ cart: cartWithAddQuantity })
    get().changeResume()
  },
  decreaseItemQuantity: (id: number) => {
    const item = get().cart.filter((c) => c.id === id)

    if (item[0].quantity === 1) {
      get().removeItemFromCart(id)
      get().changeResume()
      return null
    }

    const cartWithAddQuantity = get().cart.map((c) => {
      if (c.id === id) {
        return { ...c, quantity: c.quantity - 1 }
      }

      return c
    })

    set({ cart: cartWithAddQuantity })
    get().changeResume()
  },
}))
