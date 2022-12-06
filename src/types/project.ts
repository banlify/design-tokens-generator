interface ProjectTokens {
  $type: string
  tokens: Array<{
    [key: string]: {
      $value: string
      $description: string
    }
  }>
}

export interface ProjectBoard {
  name: string
  description: string
  tokens: {
    [category: string]: ProjectTokens
  }
}
