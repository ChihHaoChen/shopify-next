export type ApiFetcherOptions = {
  query: string
  variables?: Variables
}


export type Variables = { [key: string]: string | undefined | any }


export type ApiFetcherResults<T> = {
  data: T
}


export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions,
) => Promise<ApiFetcherResults<T>>


export interface ApiConfig {
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
}


export interface ApiHooks {
  cart: {
    useAddItem: any
  }
}


export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
}