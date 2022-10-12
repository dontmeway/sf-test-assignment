import cn from 'classnames'

import { IconLogo } from '@/shared/assets/icons'

type Props = {
  orientation?: 'vertical' | 'horizontal'
  textWrap?: boolean
}

export const Logo = ({
  orientation = 'horizontal',
  textWrap = true,
}: Props) => {
  return (
    <div
      className={cn('flex items-center space-x-2.5', {
        'flex-col space-y-2.5 !space-x-0 !text-white':
          orientation === 'vertical',
      })}
    >
      <IconLogo />
      <h1
        className={cn('flex space-y-0 text-[15px] leading-[18.5px]', {
          'flex-col': textWrap,
        })}
      >
        <b className="font-medium text-brand-secondary">Creative</b>
        <span className="font-light">Agency</span>
      </h1>
    </div>
  )
}
