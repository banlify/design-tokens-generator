interface DebounceRefOptions {
  delay?: number
  onTrigger?: () => void
}

export function useDebounceRef (
  value?: any,
  { delay = 300 }: DebounceRefOptions = {}
): ReturnType<typeof customRef> {
  let timeoutId = 0
  return customRef((track, trigger) => ({
    get () {
      track()
      return value ?? ''
    },
    set (newValue) {
      clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        value = newValue
        trigger()
      }, delay)
    }
  }))
}
