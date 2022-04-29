import { getHumanReadableDate } from '../../utils/getHumanReadableDate'

describe('getHumanReadableDate', () => {
  test('correctly converts an AWS date time to a human readable date', () => {
    expect(getHumanReadableDate('1997-12-17 07:37:16-08')).toEqual(
      '17/12/1997 15:37'
    )
  })
})
