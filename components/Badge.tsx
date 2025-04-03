type TBadgeProps = {
  title: string
  url: string
  icon: any
}

export const Badge = ({ title, url, icon }: TBadgeProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-2 py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-neutral-100 hover:text-black"
    >
      {icon}
      {title}
    </a>
  )
}
