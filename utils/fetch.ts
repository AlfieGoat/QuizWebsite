import axios, { AxiosPromise } from 'axios'
import { GRAPHQL_API_URL } from './constants'

export const makeQuery = async (
  query: string,
  Authorization: string,
  variables?: { [key: string]: string | number }
): Promise<AxiosPromise<any>> => {
  const graphqlData = await axios({
    url: GRAPHQL_API_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/graphql',
      Authorization: Authorization,
    },
    data: {
      variables: { ...variables },
      query: query,
    },
  })

  return graphqlData
}
