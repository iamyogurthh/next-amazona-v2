import React from 'react'
import CartDetails from './CartDetails'

export async function generateMetadata() {
  return { title: 'Shopping Cart' }
}

const CartPage = () => {
  return <CartDetails />
}

export default CartPage
