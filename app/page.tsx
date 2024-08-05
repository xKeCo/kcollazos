import { Badge } from '@/components/Badge';
import { footerLinks } from '../data/footerLinks';
import { projectsInfo } from '../data/projectsInfo';

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center flex-none gap-0 h-min overflow-visible">
      <div className="flex flex-col items-start justify-center gap-20 pb-20">
        <h1>&quot;Logo&quot;</h1>

        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="font-medium text-xl leading-8 text-balance">
            <span className="text-neutral-100">Kevin Collazos</span>, Building software and web
            experiences. Frontend Developer at{' '}
            <span className="italic text-neutral-100">
              Alliance of Bioversity international & CIAT.
            </span>
          </h1>
          <p className="text-base font-medium leading-7">
            <span className="italic text-neutral-100">
              Traveling between the hidden code world and the visible pixel realm.
            </span>
            <br />
            Developing impactful digital solutions that enable people to work effectively and
            cultivate a strong online presence.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="grid min-[425px]:grid-cols-2 items-start justify-start gap-8 w-full pb-20">
        {projectsInfo.map((project) => (
          <div key={project.title} className="flex flex-col items-start justify-start gap-6">
            <h2 className="text-sm font-medium">{project.title}</h2>

            <div className="flex flex-col items-start justify-start gap-6 group/item">
              {project.data.map((data) => (
                <div className="flex flex-col gap-5 items-start" key={data.url}>
                  <a
                    key={data.url}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start justify-start gap-2 group/link"
                  >
                    <div className="text-base text-neutral-100">
                      <h1>{data.name}</h1>
                      <div className="h-px bg-white/40 rounded-2xl group-hover/link:bg-neutral-100 transition-colors duration-200 ease-in-out"></div>
                    </div>
                  </a>
                  <p className="text-base leading-7 text-pretty">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="text-sm font-medium">Social</h2>

        <div className="flex items-center justify-start flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Badge key={link.url} title={link.title} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </main>
  );
}
