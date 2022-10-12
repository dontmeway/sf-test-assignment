import { Link } from 'react-router-dom'
import { BsTelegram } from 'react-icons/bs'
import { ImVimeo2 } from 'react-icons/im'
import { AiFillBehanceCircle } from 'react-icons/ai'

import { Anchor, Ball, Button, Container, Logo } from '@/shared/ui'

import * as lib from './lib'

export const HeaderWidget = () => {
  return (
    <div className="w-full h-[1024px] relative">
      <header className="w-full py-[30px] absolute top-0 z-10">
        <Container>
          <div className="w-full flex justify-between">
            <Logo />
            <nav className="flex items-center space-x-8">
              <ul className="flex items-center space-x-5">
                {lib.navigationLinks.map((link) => (
                  <Anchor key={link.href} {...link} />
                ))}
              </ul>
              <Link to="/admin">
                <Button variant="outline">Перейти к админке</Button>
              </Link>
            </nav>
          </div>
        </Container>
      </header>
      <Container>
        <div className="flex flex-col space-y-[30px] max-w-[635px] w-full z-30 absolute top-[268px]">
          <h2 className="text-xl leading-6 font-medium text-brand-secondary rounded-[5px] px-2.5 py-[5px] bg-white w-max">
            Команда опытных дизайнеров
          </h2>
          <h3 className="flex flex-col space-y-0">
            <b className="text-[50px] leading-[64px] font-normal">
              Идеальная веб-студия
            </b>
            <b className="text-[40px] leading-[52px] text-white">
              уникальный дизайн
            </b>
          </h3>
          <div className="flex flex-col w-max space-y-[30px]">
            <Button className="w-max">Посмотреть работы</Button>
            <div className="flex space-x-5">
              <BsTelegram className="h-8 w-8 fill-brand-black hover:fill-brand-secondary transition-colors cursor-pointer" />
              <ImVimeo2 className="h-8 w-8 fill-brand-black hover:fill-brand-secondary transition-colors cursor-pointer" />
              <AiFillBehanceCircle className="h-9 w-9 fill-brand-black hover:fill-brand-secondary transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-header absolute inset-0 bg-no-repeat bg-center bg-cover" />
      <div className="bg-subHeader absolute inset-x-0 h-48 bottom-0 z-10" />
      <Ball className="bg-btn animate-firstBall w-[160px] top-[400px] left-[200px]" />
      <Ball className="bg-btn animate-secondBall w-[140px] top-[600px] right-[400px]" />
    </div>
  )
}
