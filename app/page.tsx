import { Badge } from '@/components/Badge'
import { footerLinks } from '../data/footerLinks'

export default function Home() {
  return (
    <main className="flex h-min flex-none flex-col items-start justify-center gap-0 overflow-visible">
      <div className="flex flex-col items-start justify-center gap-20 pb-12">
        <h1>&quot;Logo&quot;</h1>

        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="text-xl leading-8 font-medium text-balance">
            <span className="text-neutral-100">Kevin Collazos</span>, Building
            software and web experiences. Frontend Developer at{' '}
            <span className="text-neutral-100 italic">
              Alliance of Bioversity international & CIAT.
            </span>
          </h1>
          <p className="text-base leading-7 font-medium">
            <span className="text-neutral-100 italic">
              Traveling between the hidden code world and the visible pixel
              realm.
            </span>
            <br />
            Developing impactful digital solutions that enable people to work
            effectively and cultivate a strong online presence.
          </p>
        </div>
      </div>

      {/* Social */}
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="text-sm font-medium">Social</h2>

        <div className="flex flex-wrap items-center justify-start gap-4">
          {footerLinks.map(link => (
            <Badge
              key={link.url}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
