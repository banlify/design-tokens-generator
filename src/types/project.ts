interface ProjectTokens {
  type: string
  tokens: Array<{
    [key: string]: {
      value: string
      description: string
    }
  }>
}

export interface ProjectBoard {
  id: string
  name: string
  description: string
  tokens: {
    [category: string]: ProjectTokens
  }
}
