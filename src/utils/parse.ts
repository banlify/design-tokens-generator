import { PROJECT_LOCAL_CACHE_KEY } from '@/utils/constants'
import type { ProjectBoard } from '@/types/project'

const CACHE_KEY = PROJECT_LOCAL_CACHE_KEY + 'projects'

export function getLocalCaches (): ProjectBoard[] {
  return JSON.parse(localStorage.getItem(CACHE_KEY) ?? '[]')
}

export function setLocalCaches (value: ProjectBoard[]): void {
  localStorage.setItem(CACHE_KEY, JSON.stringify(value))
}
