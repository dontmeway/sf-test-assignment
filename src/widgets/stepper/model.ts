import { createEvent, createEffect, sample, attach, restore } from 'effector'
import { createGate } from 'effector-react'
import { debounce } from 'patronum'

export const Gate = createGate<{ map: Map<number, HTMLSpanElement> }>()

export const mounted = createEvent()
export const unmounted = createEvent()
const scrolled = createEvent<Event>()

const bindScrollFx = createEffect(() => {
  window.addEventListener('scroll', scrolled)
})

const unbindScrollFx = createEffect(() => {
  window.removeEventListener('scroll', scrolled)
})

const debouncedScrollFx = attach({
  source: Gate.state,
  effect: ({ map }) => {
    const screenHeight = window.screen.height

    const onlyPassedNodes = Array.from(map).filter(([key, node]) => {
      const nodeTop = node.getBoundingClientRect().top
      const middleOfTheScreen = screenHeight / 2 + 30

      return nodeTop < middleOfTheScreen
    })

    return onlyPassedNodes.map(([key]) => key)
  },
})

const $passedSteps = restore(debouncedScrollFx, [])
export const $lastPassedStep = $passedSteps.map((steps) => Math.max(...steps))

sample({
  clock: mounted,
  target: bindScrollFx,
})

sample({
  clock: debounce({ source: scrolled, timeout: 5 }),
  target: debouncedScrollFx,
})

sample({
  clock: unmounted,
  target: unbindScrollFx,
})
