import { ApiFetcherOptions, ApiFetcherResults } from '@common/types/api'
import { API_URL, STOREFRONT_TOKEN } from '@framework/const'


const fetchApi = async <T>({ query, variables }: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  console.log('fetchApi')
  const res = await fetch(API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN!
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  console.log('After fetchApi')
  const { data, errors } = await res.json()
  console.log('errors =>', errors)
  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data }
}


export default fetchApi