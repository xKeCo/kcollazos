import { Badge } from '@/components/';

export default function Home() {
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
            {/* Enjoying being able to create{' '}
            <span className="text-neutral-100">crafting engaging digital solutions</span> that
            empower people to work productively and establish their presence in the{' '}
            <span className="text-neutral-100">digital world.</span> */}
          </p>
        </div>
      </div>

      {/* Social */}
      {/* <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="text-base font-medium leading-6 text-neutral-100">Social</h2>

        <div className="flex items-center justify-start gap-4">
          <Badge />
          <a
            href="
            https://www.linkedin.com/in/kevincollazos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100"
          >
            LinkedIn
          </a>
        </div>
      </div> */}
    </main>
  );
}
