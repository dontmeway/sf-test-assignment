import { BsArrowLeft } from 'react-icons/bs'

type Props = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export const ServiceCard = (props: Props) => {
  return (
    <div className="w-[350px] h-[330px] rounded-[10px] overflow-hidden cursor-pointer group">
      <div className="relative w-full h-full">
        <div className="absolute bg-card inset-0 bg-no-repeat bg-cover bg-center" />
        <div className="absolute bg-white inset-0 opacity-0 group-hover:opacity-50 transition-opacity" />
        <div className="w-[70px] h-[70px] rounded-[50%] bg-black transition-colors absolute top-10 left-10" />
        <div className="flex flex-col space-y-[15px] text-white absolute w-full h-full p-10">
          <props.icon className="pl-5 pt-2 group-hover:fill-white" />
          <h4 className="text-xl leading-6 font-medium">{props.title}</h4>
          <p className="text-base leading-5">{props.description}</p>
          <button className="w-max flex items-center space-x-2">
            <span className="text-brand-secondary text-[15px] font-medium group-hover:text-white transition-colors">
              Подробнее
            </span>
            <BsArrowLeft className="fill-brand-secondary rotate-180 group-hover:translate-x-10 transition-all group-hover:fill-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
