import { Layout } from '@components/common/'
import { Container } from '@components/ui'
import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/product'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'


export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig()
  const { products } = await getAllProductsPaths(config)

  return {
    paths: products.map(product => ({ params: { slug: product.slug }})),
    fallback: false
  }
}


export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  
  const config = getConfig()
  const { product } = await getProduct({ config, variables: { slug: params?.slug }})

  return {
    props: {
      product
    }
  }
}


const ProductSlug = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <p>id: {product?.id}</p>
      <p>name: {product?.name}</p>
      <p>price value: {product?.price.value}</p>
      <p>price currency: {product?.price.currencyCode}</p>
      <p>description: {product?.description}</p>
      <h1 className='mt-4'>Options</h1>
      <div>
        {product?.options.map(option => 
          <div key={option.id}>
            <p>Name: {option.displayName}</p>
            {
              option.values.map(value => 
                <div key={value.label}>
                  <p>Label: {value.label}</p>
                  <p>Hex Color: {value.hexColor}</p>
                </div>  
              )
            }
          </div>  
        )}
      </div>

      <h1 className='mt-4'>Variants</h1>
      <div>
        {product?.variants.map(variant => 
          <div key={variant.id}>
            <p>Variant Name: {variant.name}</p>
            {
              variant.options.map(vOption => 
                <div key={vOption.displayName}>
                  <p>Name: {vOption.displayName}</p>
                  {
                    vOption.values.map(value =>
                      <div key={value.label}>
                        <p>Label: {value.label}</p>
                        <p>HexColor: {value.hexColor}</p>
                      </div>  
                    )
                  }
                </div>  
              )
            }
          </div>  
        )}
      </div>
    </Container>
  )
}

export default ProductSlug


ProductSlug.Layout = Layout