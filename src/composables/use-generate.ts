import type { ProjectTokens } from '@/types/project'

export function useGenerateCSS (tokens: ProjectTokens[]): string {
  const tokenString = tokens.reduce<string>((acc, { name, value, description }) => {
    if (name && value) {
      acc += `\n  --${name}: ${value}; ${description && `/* ${description} */`}`
    }

    return acc
  }, ':root {')

  return tokenString + '\n}'
}

export function useGenerateScss (tokens: ProjectTokens[]): string {
  const tokenString = tokens.reduce<string>((acc, { name, value, description }) => {
    if (name && value) {
      acc += `$${name}: ${value}; ${description && `/* ${description} */`}\n`
    }

    return acc
  }, '')

  return tokenString
}
