import { getQuizUrl, getEditQuizUrl } from '../../utils/getUrls'

const QUIZ_ID = '123e4567-e89b-42d3-a456-556642440000'

describe('getUrls', () => {
  test('gets quiz URL correctly', () => {
    expect(getQuizUrl(QUIZ_ID)).toEqual(`/quiz/${QUIZ_ID}`)
  })
  test('gets quiz URL correctly', () => {
    expect(getEditQuizUrl(QUIZ_ID)).toEqual(`/editQuiz/${QUIZ_ID}`)
  })
})
