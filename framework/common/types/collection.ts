import { Product } from "./product";


export interface CollectionImage {
  url: string
  alt?: string
}

export interface Collection {
  id: string
  title: string
  path: string
  slug: string
  image: CollectionImage
}