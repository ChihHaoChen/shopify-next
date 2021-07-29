
import useCart from '@common/cart/use-cart'
import { checkoutToCart, createCheckout, getCheckoutQuery } from '@framework/utils'
import { useMemo } from 'react'

export default useCart

export const handler = {
  fetchOptions: {
    // get checkout query
    query: getCheckoutQuery
  },
  async fetcher({
    fetch,
    options,
    input: { checkoutId }
  }: any) {
    let checkout

    console.log('inside handler in use-cart with checkoutId => ', checkoutId)
    if (!(Object.entries(checkoutId).length === 0)) {
      console.log('with CheckoutId =>', checkoutId)
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId
        }
      })
      checkout = data.node
    } else {
      console.log('without CheckoutId')
      checkout = await createCheckout(fetch)
    }

    const cart = checkoutToCart(checkout)

    // Normalize checkout !
    return cart
  },
  useHook: ({useData}: any) => {
    const data = useData({
      swrOptions: {
        revalidateOnFocus: false
      }
    })

    return useMemo(() => {
      return data
    }, [data])
  }
}
