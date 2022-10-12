import cn from 'classnames'

type Props = {
  className?: string
}

export const Ball = ({ className = '' }: Props) => {
  return (
    <div
      className={cn(
        'rounded-[50%] absolute transition-all z-20 shadow-2xl',
        className
      )}
    />
  )
}
