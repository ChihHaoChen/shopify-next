import { ApiConfig, Variables } from "@common/types/api"
import { normalizeCollection, getCollectionQuery } from '../utils'
import { CollectionConnection }  from '../schema'
import { Collection } from '@common/types/collection'


type ReturnType = {
  collections: CollectionConnection
}


const getCollection = async (config: ApiConfig): Promise<Collection[]> => {

  const { data } = await config.fetch<ReturnType>({
    query: getCollectionQuery,
    variables: {
      // pick: ["伴手禮", "北海道薰衣草季"],
      pick: "北海道薰衣草季",
      productFirst: 5
    }
  })

  const dataAll = await Promise.all([
    config.fetch<ReturnType>({
      query: getCollectionQuery,
      variables: {
        pick: "伴手禮",
        productFirst: 5
      }
    }),
    config.fetch<ReturnType>({
      query: getCollectionQuery,
      variables: {
        pick: "北海道薰衣草季",
        productFirst: 5
      }
    })
  ])

  const collections = dataAll.map(dataSingle => normalizeCollection(dataSingle.data.collections.edges[0].node))

  return collections
}


export default getCollection