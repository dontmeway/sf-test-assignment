import { Anchor, Logo } from '@/shared/ui'
import { BsTelegram } from 'react-icons/bs'
import { ImVimeo2 } from 'react-icons/im'
import { AiFillBehanceCircle } from 'react-icons/ai'

const navigationLinks = [
  {
    title: 'Услуги',
    href: 'services',
  },
  {
    title: 'Как мы работаем?',
    href: 'how-we-work',
  },
  {
    title: 'Свяжитесь с нами',
    href: 'contacts',
  },
  {
    title: 'Блог',
    href: 'blog',
  },
]

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-black py-[50px]">
      <div className="max-w-[520px] w-full mx-auto flex flex-col space-y-[50px] items-center">
        <Logo orientation="vertical" />
        <ul className="flex w-full items-center justify-between">
          {navigationLinks.map((link) => (
            <Anchor key={link.href} className="!text-white" {...link} />
          ))}
        </ul>
        <div className="flex space-x-5">
          <BsTelegram className="h-8 w-8 fill-white hover:fill-brand-secondary transition-colors cursor-pointer" />
          <ImVimeo2 className="h-8 w-8 fill-white hover:fill-brand-secondary transition-colors cursor-pointer" />
          <AiFillBehanceCircle className="h-9 w-9 fill-white hover:fill-brand-secondary transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}
