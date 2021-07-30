import Cookies from "js-cookie"
import { ApiHooks, SWRHook } from "@common/types/hooks"
import { useHook, useSWRHook } from "@common/utils/use-hook"
import { useApiProvider } from "@common"


export type UseCart <
  H extends SWRHook = SWRHook<any>
> = ReturnType<H['useHook']>


const useCart = () => {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)
  const { checkoutCookie } = useApiProvider()
  
  const fetcherWrapper: typeof hook.fetcher = (context: any) => {
    console.log('inside fetchWrapper with checkoutCookie =>', checkoutCookie)
    console.log('Cookies.get =>', Cookies.get(checkoutCookie))
    
    
    context.input.checkoutId = Cookies.get(checkoutCookie)
    
    console.log('checkoutId from context =>', context)
    return hook.fetcher(context)
  }

  return useSWRHook({...hook, fetcher: fetcherWrapper})()
}

export default useCart
