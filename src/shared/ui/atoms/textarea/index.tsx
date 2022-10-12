import { forwardRef } from 'react'
import cn from 'classnames'

import styles from './styles.module.pcss'

type NativeTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

type TextareaProps = NativeTextareaProps & {
  className?: string
  isDisabled?: boolean
  isInvalid?: boolean
  label: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className = '', isDisabled = false, isInvalid = false, label, ...rest },
    ref
  ) => {
    return (
      <label className="relative block w-full text-gray-500">
        <textarea
          ref={ref}
          className={cn(
            styles.base,
            'max-h-40 min-h-[120px] w-full p-4',
            'rounded bg-[#FEF7FE]',
            'border-2',
            { 'border-red-500': isInvalid },
            'focus:outline-none focus:bg-transparent focus:border-brand-secondary',
            'placeholder:opacity-0',
            className
          )}
          disabled={isDisabled}
          placeholder={label}
          {...rest}
        />
        <span className={cn(styles.label)}>{label}</span>
      </label>
    )
  }
)
