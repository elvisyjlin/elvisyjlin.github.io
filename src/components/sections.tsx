import Image from "next/image";
import { FC, ReactNode, SVGProps } from "react";
import FadeInSection from "./fadein";
import { GithubIcon, LinkedInIcon } from "./icons";
import { MyLink, UnderlineLink } from "./links";

export const Hero: FC = () => {
  return (
    <section className="min-h-screen relative">
      <div
        className="absolute sm:right-1/2 inset-y-0 z-10 flex flex-col sm:justify-center 
        font-lexend bg-gradient-to-b from-white to-white/[.0] sm:bg-none w-screen sm:w-fit"
      >
        <div className="pl-10 sm:pl-20 md:pl-32 xl:pl-40 pr-10 sm:pr-0 py-10 mr-0 md:-mr-18">
          <h1
            className="scale-y-95 tracking-[.015em] font-serif font-bold 
            text-4xl sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.1] xl:text-7xl xl:leading-[1.1]"
          >Hello, I am<br />Elvis</h1>
          <div className="mt-6 sm:mt-10 pb-60 sm:pb-0">
            <div className="flex gap-2 items-center">
              <p>aka Yu Jing Lin</p>
              <MyLink href="https://github.com/elvisyjlin" target="_blank" rel="noreferrer">
                <GithubIcon className="h-5 w-5 fill-current" />
              </MyLink>
              <MyLink href="https://www.linkedin.com/in/elvisyjlin" target="_blank" rel="noreferrer">
                <LinkedInIcon className="h-5 w-5 fill-current" />
              </MyLink>
            </div>
            <br />
            <p>About Me</p>
            <p className="font-light">I am the co-founder of Genki.</p>
            <p className="font-light">I was an NLP model engineer at Microsoft.</p>
            <p className="font-light">I love computer vision, natural language processing, and decentralization.</p>
            <br />
            <p>You don&apos;t need to know but...</p>
            <p className="font-light">I am a KPOP fan, a dancer and a shutterbug.</p>
            <br />
            <div className="text-xs sm:text-base mt-1 sm:mt-0">
              <MyLink href="https://pytorch.org/" target="_blank" rel="noreferrer">PyTorch</MyLink>
              <span> / </span>
              <MyLink href="https://docs.soliditylang.org/" target="_blank" rel="noreferrer">Solidity</MyLink>
              <span> / </span>
              <MyLink href="https://ton.org/docs/develop/func/overview" target="_blank" rel="noreferrer">FunC</MyLink>
              <span> / </span>
              <MyLink href="https://tact-lang.org/" target="_blank" rel="noreferrer">Tact</MyLink>
            </div>
          </div>
          {/* <div className="mt-6 sm:mt-10">
            <button className="pl-3 p-2 bg-white border border-black flex gap-1 items-center">
              <span className="font-light">VIEW PORTFOLIO</span>
              <ChevronDownIcon className="h-5 w-5 stroke-2" />
            </button>
          </div> */}
        </div>
      </div>
      <div className="absolute sm:left-1/4 md:left-1/3 lg:left-1/2 xl:left-1/2 inset-y-0 pl-10 pr-4 sm:pr-10">
          <Image
            src="/portrait.webp"
            alt="Portrait"
            width={1359}
            height={2000}
            className="h-full object-contain object-bottom"
          />
      </div>
    </section>
  );
};

type NamedSectionProps = {
  children?: ReactNode[]|ReactNode|string;
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

export const NamedSection: FC<NamedSectionProps> = ({ children, name, Icon }) => {
  return (
    <FadeInSection>
      <section className="sm:grid sm:grid-cols-12 mb-8 gap-8">
        <div className="mb-8 sm:col-span-4 lg:col-span-3 3xl:col-span-2 flex gap-2">
          <Icon className="h-5 text-zinc-500 mt-[4px]" />
          <h2 className="text-lg font-semibold text-zinc-500">{name}</h2>
        </div>
        <div className="sm:col-span-8 lg:col-span-9 3xl:col-span-10">{children}</div>
      </section>
    </FadeInSection>
  );
};

export const GithubStats: FC = () => {
  return (
    <section className="mx-10 flex flex-col items-center gap-4 sm:gap-6 mb-40 font-lexend">
      <FadeInSection>
        <Image
          src="https://github-readme-stats.vercel.app/api?username=elvisyjlin&theme=graywhite&show_icons=true&disable_animations=true"
          // width={450}
          // height={195}
          width={510}
          height={221}
          alt="Github stats of elvisyjlin"
          loading="lazy"
        />
      </FadeInSection>
      <FadeInSection>
        <UnderlineLink className="text-xs sm:text-lg font-roboto font-semibold scale-y-90 text-github-dark opacity-95" href="https://github.com/elvisyjlin" target="_blank" rel="noreferrer">Visit My GitHub</UnderlineLink>
      </FadeInSection>
    </section>
  );
};