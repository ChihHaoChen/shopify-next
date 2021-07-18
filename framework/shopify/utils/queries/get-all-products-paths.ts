

const getAllProductsPathsQuery = `
  query getAllProductsPath($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          handle
        }
      }
    }
  }

`


export default getAllProductsPathsQuery