type Props = {
  label: string
}

export const Checkbox = (props: Props) => {
  return (
    <label className="flex items-center space-x-1.5">
      <input type="checkbox" />
      <span className="text-[#2E2E2E] text-sm leading-4">{props.label}</span>
    </label>
  )
}
