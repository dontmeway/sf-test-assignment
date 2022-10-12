type Props = {
  imageSrc: string
  tag: string
  date: string
  title: string
  description: string
}

export const NewsCard = ({
  date,
  description,
  imageSrc,
  tag,
  title,
}: Props) => {
  return (
    <div className="max-w-[350px] w-full group border-b border-b-gray-200 hover:border-b-brand-secondary transition-colors pb-8 cursor-pointer">
      <img
        src={imageSrc}
        alt={imageSrc}
        className="w-full h-[204px] rounded-md mb-2.5"
      />
      <div className="flex items-center space-x-3 mb-3">
        <span className="text-sm text-[#5E5E5E] pr-3 border-r border-r-gray-200">
          {date}
        </span>
        <span className="text-sm text-brand-secondary">{tag}</span>
      </div>
      <h5 className="text-brand-black text-xl font-medium group-hover:text-brand-secondary transition-colors mb-2.5">
        {title}
      </h5>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  )
}
