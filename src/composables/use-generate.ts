import type { ProjectTokens } from '@/types/project'

export function useGenerate (tokens: ProjectTokens[]): string {
  const _tokens = JSON.stringify(
    tokens.reduce<Record<string, string>>((acc, { name, value, description }) => {
      if (name && value) {
        acc['--' + name] = value + ';'
      }

      return acc
    }, {}),
    null,
    2
  )

  return ':root ' + _tokens.replace(/"/g, '')
}
