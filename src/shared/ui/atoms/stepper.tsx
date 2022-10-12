import cn from 'classnames'
import { forwardRef } from 'react'

type Props = {
  orientation: 'left' | 'right' | 'center'
  title: string
  description: string
  step: number
  isLast?: boolean
  activeStep: number
}

const Root = forwardRef<HTMLSpanElement, Props>(
  ({ orientation, description, title, step, isLast, activeStep }, ref) => {
    if (isLast) {
      return (
        <>
          <div />
          <Step
            activeStep={activeStep}
            ref={ref}
            step={step}
            isLast={isLast}
            orientation={orientation}
          />
          <div />
        </>
      )
    }

    return (
      <>
        {orientation === 'left' ? (
          <TextBlock
            orientation={orientation}
            title={title}
            description={description}
          />
        ) : (
          <div />
        )}

        <Step
          activeStep={activeStep}
          ref={ref}
          step={step}
          isLast={isLast}
          orientation={orientation}
        />
        {orientation === 'right' ? (
          <TextBlock
            orientation={orientation}
            title={title}
            description={description}
          />
        ) : (
          <div />
        )}
      </>
    )
  }
)

const Step = forwardRef<
  HTMLSpanElement,
  Pick<Props, 'isLast' | 'step' | 'orientation' | 'activeStep'>
>(({ step, orientation, isLast = false, activeStep }, ref) => {
  const isActive = step <= activeStep
  return (
    <div
      className={cn(
        'h-[200px] w-[215px] relative border-b-2 transition-colors',
        {
          'border-brand-secondary': isActive,
          'border-[#2AF598]': !isActive,
          'border-l-2': orientation === 'left',
          'border-r-2': orientation === 'right',
          'border-none !h-[20px]': isLast,
        }
      )}
    >
      <span
        ref={ref}
        className={cn(
          'text-sm leading-5 rounded-[50%] text-white px-2.5 py-1 absolute -top-3 transition-colors',
          {
            'bg-brand-secondary': isActive,
            'bg-[#2AF598]': !isActive,
            '-left-3': orientation === 'left',
            '-right-3': orientation === 'right',
          }
        )}
      >
        {step}
      </span>
    </div>
  )
})

const TextBlock = ({
  description,
  orientation,
  title,
}: Pick<Props, 'title' | 'description' | 'orientation'>) => {
  return (
    <div className="flex flex-col space-y-5 py-5 w-[418px]">
      <h4
        className={cn(
          'text-brand-secondary text-2xl leading-8 font-normal w-full',
          {
            'text-right': orientation === 'left',
            'text-left': orientation === 'right',
            'text-center': orientation === 'center',
          }
        )}
      >
        {title}
      </h4>
      <p
        className={cn('text-base leading-5', {
          'text-[#5E5E5E]': true,
          'text-black': false,
          'text-right': orientation === 'left',
          'text-left': orientation === 'right',
          'text-center': orientation === 'center',
        })}
      >
        {description}
      </p>
    </div>
  )
}

export const Stepper = Object.assign(Root, { TextBlock })
