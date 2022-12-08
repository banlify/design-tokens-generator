import type { ProjectBoard } from '@/types/project'

function downloadJSONToLocal ({ json, filename }: { json: string, filename: string }): void {
  const element = Object.assign(document.createElement('a'), {
    download: filename,
    href: `data:application/json;charset=utf-8,${json}`
  })

  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export function useExport (project: ProjectBoard): void {
  downloadJSONToLocal({
    filename: project.name,
    json: JSON.stringify(project, null, 2)
  })
}
