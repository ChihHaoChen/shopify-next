

const　collectionConnection = `
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  edges {
    node {
      handle
      id
      title
      image(scale: 1) {   
        originalSrc
        altText
        width
        height
      }
      products(first: $productFirst) {
        edges {
          node {
            id
            title
            images(first: 1) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  originalSrc
                  altText
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
}   
`

const getCollectionQuery = `
query getASpecificCollection($pick: String, $productFirst: Int) {
  collections(query: $pick, first: 1) {
    ${collectionConnection}
  }
}
`

export default getCollectionQuery