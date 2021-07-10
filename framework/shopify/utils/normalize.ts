
import { ImageEdge, Product as ShopifyProduct } from '../schema'
import { Product } from '@common/types/product'


const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge>}) => (
  edges.map(({ node: { originalSrc: url, ...rest} }) => (
    {
      url: `/images/${url}`,
      ...rest
    }
  ))
)


export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageCollection,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageCollection),
    ...rest
  }

  return product
}