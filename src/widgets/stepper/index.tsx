import { useEffect, useMemo, useRef } from 'react'
import { useGate, useUnit } from 'effector-react'

import { Container, Stepper } from '@/shared/ui'

import * as model from './model'
import * as lib from './lib'

export const StepperWidget = () => {
  const ref = useRef(new Map<number, HTMLSpanElement>())
  const lastPassedStep = useUnit(model.$lastPassedStep)
  useGate(model.Gate, { map: ref.current })

  const lastStep = useMemo(() => lib.steps.at(-1), [])

  useEffect(() => {
    model.mounted()

    return () => {
      model.unmounted()
    }
  }, [])

  const getMap = () => {
    ref.current = ref.current ?? new Map<number, HTMLSpanElement>()

    return ref.current
  }

  return (
    <section id="how-we-work">
      <Container>
        <h2 className="text-right text-[36px] leading-[46px] text-brand-black font-bold mb-[50px]">
          Как мы работаем?
        </h2>
        <div className="w-full grid grid-cols-[418px_215px_418px] gap-x-8 mb-8">
          {lib.steps.map((step, idx) => (
            <Stepper
              activeStep={lastPassedStep}
              key={step.title}
              ref={(node) => setNode(idx + 1, node, getMap())}
              step={idx + 1}
              isLast={idx === lib.steps.length - 1}
              {...step}
              orientation={(idx + 1) % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
        <div className="w-max mx-auto">
          <Stepper.TextBlock
            orientation="center"
            title={lastStep?.title ?? ''}
            description={lastStep?.description ?? ''}
          />
        </div>
      </Container>
    </section>
  )
}

function setNode(
  key: number,
  node: HTMLSpanElement | null,
  map: Map<number, HTMLSpanElement>
) {
  if (node) {
    map.set(key, node)
  } else {
    map.delete(key)
  }
}
