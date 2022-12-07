const initToaster = (): HTMLElement => {
  const toaster = document.querySelector('#toaster.d-toast-group') as HTMLElement

  if (toaster) {
    return toaster
  }

  const node = Object.assign(document.createElement('section'), {
    id: 'toaster',
    className: 'd-toast-group'
  })

  document.body.append(node)
  return node
}

const createToast = (innerText: string): HTMLOutputElement => {
  const element = Object.assign(document.createElement('output'), {
    innerText,
    role: 'status',
    'aria-live': 'polite',
    className: 'd-toast'
  })

  return element
}

const addToast = (toast: HTMLOutputElement): void => {
  const { matches: motionOK } = window.matchMedia(
    '(prefers-reduced-motion: no-preference)'
  )

  Toaster.children.length && motionOK
    ? flipToast(toast)
    : Toaster.appendChild(toast)
}

// https://aerotwist.com/blog/flip-your-animations/
const flipToast = (toast: HTMLOutputElement): void => {
  // FIRST
  const first = Toaster.offsetHeight

  // add new child to change container size
  Toaster.appendChild(toast)

  // LAST
  const last = Toaster.offsetHeight

  // INVERT
  const invert = last - first

  // PLAY
  const animation = Toaster.animate([
    { transform: `translateY(${invert}px)` },
    { transform: 'translateY(0)' }
  ], {
    duration: 150,
    easing: 'ease-out'
  })

  animation.startTime = document.timeline.currentTime
}

const Toaster = initToaster()

export function useToast (text: string): void {
  const toast = createToast(text)
  addToast(toast)

  void Promise.allSettled(toast.getAnimations()
    .map(async animation => await animation.finished)
  )
    .then(() => Toaster.removeChild(toast))
}
