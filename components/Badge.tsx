type TBadgeProps = {
  title: string;
  url: string;
  icon: any;
};

export const Badge = ({ title, url, icon }: TBadgeProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center py-1 px-2 gap-2 text-sm font-medium bg-white/5 rounded-2xl hover:text-black hover:bg-neutral-100 transition-colors duration-200 ease-in-out"
    >
      {icon}
      {title}
    </a>
  );
};
