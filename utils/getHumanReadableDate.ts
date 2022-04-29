export const getHumanReadableDate = (AWSDateTime: string): string => {
  const date = new Date(AWSDateTime)
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}
