import { forwardRef } from 'react'
import cn from 'classnames'

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'disabled'
>

type ButtonTheme = 'primary' | 'secondary'
type ButtonVariant = 'solid' | 'outline'
type Theme = {
  solid: string
  outline: string
}

type ButtonProps = NativeButtonProps & {
  className?: string
  /**
   * Button theme
   * @default primary
   */
  theme?: ButtonTheme
  /**
   * Button variant
   * @default solid
   */
  variant?: ButtonVariant
}

const ButtonTheme: Record<ButtonTheme, Theme> = {
  primary: {
    solid: 'text-white bg-btn focus:ring-pink-300',
    outline:
      'text-brand-secondary border-2 disabled:opacity-50 focus:ring-pink-300 border-[#F5576C] hover:text-opacity-70 hover:border-opacity-70',
  },
  secondary: {
    solid: 'text-black-500 bg-blue-50 focus:ring-blue-200',
    outline: 'noop',
  },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className = '',
    theme = 'primary',
    variant = 'solid',
    type = 'button',
    children,
    ...rest
  } = props

  const palette = ButtonTheme[theme][variant]

  return (
    <button
      ref={ref}
      className={cn(
        'transition-all rounded-[100px] px-[30px] py-[15px] text-[15px] leading-[18.15px] font-medium hover:bg-opacity-80 disabled:bg-opacity-50 focus:outline-none focus:ring focus-visible:ring',
        palette,
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
})

export { Button }
