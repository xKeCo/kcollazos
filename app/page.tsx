import { Badge } from '@/components/Badge';
import { Github, Linkedin, Mail, ScrollText, Twitter } from 'lucide-react';

export default function Home() {
  const links = [
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/kevcollazos/',
      icon: <Linkedin size={16} />,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/xKeCo',
      icon: <Github size={16} />,
    },
    {
      title: 'Twitter',
      url: 'https://x.com/kcollazos_',
      icon: <Twitter size={16} />,
    },
    {
      title: 'hi@kcollazos.com',
      url: 'mailto:kevcollazos@gmail.com',
      icon: <Mail size={16} />,
    },
    {
      title: 'CV',
      url: 'https://cv.kevincollazos.com/',
      icon: <ScrollText size={16} />,
    },
  ];

  const projects = [
    {
      title: 'Building',
      data: [
        {
          name: 'Moss',
          description: 'The new way to maintain digital medical records.',
          url: 'https://mossdental.vercel.app/',
        },
      ],
    },
    {
      title: 'Past projects',
      data: [
        {
          name: 'AcreditX',
          description:
            'A platform for universities to manage activities for high-quality program accreditation.',
          url: 'https://www.kevincollazos.com/project/AcrediX%20-%20UAO',
        },
        {
          name: 'Parqueeventos',
          description:
            'A website that allows you to see upcoming events in the city of Cali, Colombia.',
          url: 'https://www.kevincollazos.com/project/AcrediX%20-%20UAO',
        },
      ],
    },
  ];

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
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col items-start justify-start gap-6">
            <h2 className="text-sm font-medium">{project.title}</h2>

            <div className="flex flex-col items-start justify-start gap-6 group/item">
              {project.data.map((data) => (
                <>
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
                  <p className="text-base leading-7 text-balance">{data.description}</p>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="text-sm font-medium">Social</h2>

        <div className="flex items-center justify-start flex-wrap gap-4">
          {links.map((link) => (
            <Badge key={link.url} title={link.title} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </main>
  );
}
