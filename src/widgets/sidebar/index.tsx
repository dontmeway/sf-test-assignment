import { IoGridOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { Logo } from '@/shared/ui'

export const Sidebar = () => {
  return (
    <div className="max-w-xs h-full w-full py-12 pl-5 flex flex-col shadow-lg">
      <div className="flex-grow">
        <div className="mb-[50px]">
          <Logo textWrap={false} />
        </div>
        <NavLink
          to="/admin"
          className="flex items-center space-x-2 group pl-3 w-full py-3 hover:border-r-2 hover:border-r-brand-secondary transition-colors"
        >
          {({ isActive }) => (
            <>
              <IoGridOutline
                className={cn(
                  'w-6 h-6 text-brand-secondary group-hover:text-brand-secondary transition-colors',
                  {
                    'text-brand-secondary': isActive,
                    'text-[#D4BCD4]': !isActive,
                  }
                )}
              />
              <span
                className={cn(
                  'text-base group-hover:text-brand-secondary transition-colors',
                  {
                    'text-brand-secondary': isActive,
                    'text-[#D4BCD4]': !isActive,
                  }
                )}
              >
                Моя доска
              </span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  )
}
