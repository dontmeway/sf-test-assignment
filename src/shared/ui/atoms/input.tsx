import { forwardRef } from 'react'
import cn from 'classnames'

type NativeInputProps = React.InputHTMLAttributes<HTMLInputElement>

type InputProps = NativeInputProps & {
  className?: string
  isDisabled?: boolean
  isInvalid?: boolean
}

export const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  (
    { className = '', type = 'text', isDisabled = false, isInvalid, ...rest },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-14 py-1.5 px-6',
          'rounded bg-[#FEF7FE]',
          'border-2',
          { 'border-red-500': isInvalid },
          'focus:outline-none focus:border-brand-secondary focus:bg-transparent',
          'placeholder:opacity-0',
          className
        )}
        disabled={isDisabled}
        type={type}
        {...rest}
      />
    )
  }
)
