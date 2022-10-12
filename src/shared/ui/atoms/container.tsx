type Props = {
  children: React.ReactNode
}

export const Container = (props: Props) => {
  return (
    <div className="max-w-[1110px] w-full mx-auto px-4">{props.children}</div>
  )
}
