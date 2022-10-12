import cn from 'classnames'

type Props = {
  title: string
  href: string
  className?: string
}

export const Anchor = ({ className = '', ...props }: Props) => {
  return (
    <li
      className={cn(
        'text-brand-black text-base relative font-medium hover:!text-brand-secondary transition-colors',
        className
      )}
    >
      <a href={`#${props.href}`}>{props.title}</a>
    </li>
  )
}
