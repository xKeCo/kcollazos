import { Badge } from '@/components/';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

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
  ];

  return (
    <main className="flex flex-col items-start justify-center flex-none gap-0 h-min overflow-visible">
      <div className="flex flex-col items-start justify-center gap-20 pb-20">
        <h1>&quot;Logo&quot;</h1>

        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="font-medium text-xl leading-8 text-balance">
            <span className="text-neutral-100">Kevin Collazos</span>, Building software and web
            experiences. Frontend Developer at{' '}
            <span className="italic text-neutral-100">Alliance Bioversity and CIAT.</span>
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

      {/* Social */}
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="text-base font-medium leading-6 text-neutral-100">Social</h2>

        <div className="flex items-center justify-start gap-4">
          {links.map((link) => (
            <Badge key={link.url} title={link.title} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </main>
  );
}
