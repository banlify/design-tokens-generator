import type { ProjectBoard } from '@/types/project'
import { getLocalCaches } from '@/utils/parse'

export const projects = ref<ProjectBoard[]>(getLocalCaches())

export const currentProject = ref()
