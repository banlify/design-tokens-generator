export interface ProjectBoard {
  id: string
  name: string
  description: string
  tokens: ProjectTokens[]
}

export interface ProjectTokens {
  name: string
  value: string
  description: string
}
