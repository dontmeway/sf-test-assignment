import { forwardRef } from 'react'
import cn from 'classnames'

import { InputRoot } from '../../atoms'

import styles from './float.module.pcss'

type NativeInputProps = React.InputHTMLAttributes<HTMLInputElement>

export type InputProps = NativeInputProps & {
  labelText: string
  className?: string
  isDisabled?: boolean
  isInvalid?: boolean
  autoFocus?: boolean
}

export const Float = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { labelText, autoFocus, className, isInvalid, isDisabled, ...rest } =
      props

    return (
      <label className="relative block w-full text-gray-500">
        <InputRoot
          ref={ref}
          autoFocus={autoFocus}
          className={cn(
            styles['input-base'],
            'w-full pt-4 pb-[2px] px-4 focus:outline-none ',
            className
          )}
          placeholder={labelText}
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          {...rest}
        />
        <span className={cn(styles['input-label'])}>{labelText}</span>
      </label>
    )
  }
)
