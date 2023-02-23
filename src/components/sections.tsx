import { PAGE } from "@/constants";
import { Playfair_Display, Roboto } from "@next/font/google";
import Image from "next/image";
import { FC, ReactNode, SVGProps, useEffect, useState } from "react";
import FadeInSection from "./fadein";
import { GithubIcon, LinkedInIcon } from "./icons";
import { MyLink, UnderlineLink } from "./links";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], display: "swap" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], display: "swap" });

export const Hero: FC = () => {
  const offsetBegin = 100;
  const offsetEnd = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 640) {
        const content = document.getElementById("content");
        const portrait = document.getElementById("portrait");
        if (content && portrait) {
          const progress = Math.min(Math.max(window.scrollY - offsetBegin, 0) / Math.max(window.innerHeight - portrait.clientHeight - offsetBegin - offsetEnd, 1), 1);
          const contentOpacity = (Math.round((1 - progress) * 100) / 100).toString();
          content.style.opacity = contentOpacity;
          const portraitOpacity = 0.25 + progress * 0.75;
          portrait.style.opacity = (Math.round(portraitOpacity * 100) / 100).toString();
        }
      }
    });
  }, []);

  return (
    <section className="min-h-screen relative">
      <div
        id="content"
        className="absolute sm:right-1/2 inset-y-0 z-10 flex flex-col sm:justify-center 
        sm:bg-none w-screen sm:w-fit"
      >
        <div className="pl-6 sm:pl-20 md:pl-32 xl:pl-40 pr-6 sm:pr-0 py-12 mr-0 md:-mr-18">
          <h1
            style={playfairDisplay.style}
            className="scale-y-95 tracking-[.015em] font-bold 
            text-4xl sm:text-5xl sm:leading-[1.1] 
            md:text-6xl md:leading-[1.1] 
            xl:text-7xl xl:leading-[1.1]"
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
              {
                PAGE.skills
                  .map((item, index) => (
                    <MyLink key={index} href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  ))
                  .reduce(
                    (prev, curr) => prev.length > 0 ? prev.concat([" / ", curr]) : prev.concat([curr]),
                    [] as ReactNode[],
                  )
              }
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
      <div
        className="absolute h-full w-full sm:left-1/4 md:left-1/3 lg:left-1/2 inset-y-0"
      >
        <Image
          priority
          id="portrait"
          src="/portrait.webp"
          alt="Portrait"
          width={1359}
          height={2000}
          className="absolute bottom-0 opacity-25 sm:opacity-100 pl-10 lg:pl-0 ml-0 lg:-ml-20 pr-4 sm:pr-10"
        />
      </div>
    </section>
  );
};

type NamedSectionProps = {
  children?: ReactNode[] | ReactNode | string;
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
  const [screenWidth, setScreenWidth] = useState<number>();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <section className="flex flex-col items-center gap-4 sm:gap-6 my-12">
      <FadeInSection>
        <Image
          src={
            "https://github-readme-stats.vercel.app/api?" +
            "username=elvisyjlin" +
            "&count_private=true" +
            "&theme=graywhite" +
            "&show_icons=true" +
            "&disable_animations=true" +
            (screenWidth && screenWidth >= 640 ? "" : "&hide_rank=true")  // Hide rank if the window size is smaller than sm (640px)
          }
          // width={450}
          // height={195}
          width={510}
          height={221}
          alt="Github Stats of elvisyjlin"
          loading="lazy"
        />
      </FadeInSection>
      <FadeInSection className="hidden lg:block">
        <div className="p-6 border border-gray-200 rounded">
          <Image
            src="https://ghchart.rshah.org/131313/elvisyjlin"
            alt="Github Contributions of elvisyjlin"
            // width={663}
            // height={104}
            width={730}
            height={114}
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <UnderlineLink
          style={roboto.style}
          className="sm:text-lg font-semibold scale-y-90 text-github-dark opacity-95"
          href="https://github.com/elvisyjlin"
          target="_blank"
          rel="noreferrer"
        >Visit My GitHub</UnderlineLink>
      </FadeInSection>
    </section>
  );
};