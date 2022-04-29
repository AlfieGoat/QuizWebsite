import axios from 'axios'
import { GRAPHQL_API_URL } from '../../utils/constants'
import { makeQuery } from '../../utils/fetch'

const QUERY_STRING = 'A QUERY'
const AUTHORIZATION_STRING = 'AN AUTH TOKEN'
jest.mock('axios')

describe('fetch', () => {
  test('can make a query using axios', async () => {
    makeQuery(QUERY_STRING, AUTHORIZATION_STRING)
    expect(axios).toBeCalledWith({
      data: {
        query: QUERY_STRING,
        variables: {},
      },
      headers: {
        Authorization: AUTHORIZATION_STRING,
        'Content-Type': 'application/graphql',
      },
      method: 'post',
      url: GRAPHQL_API_URL,
    })
  })
})
