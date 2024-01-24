/* eslint-disable @next/next/no-img-element */

import { PAGE } from "@/constants";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  FireIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, SVGProps, useCallback, useEffect, useRef, useState } from "react";
import { easeInOutExpo } from "./easingFn";
import FadeInSection from "./fadein";
import { GithubIcon, LinkedInIcon } from "./icons";
import { MyLink } from "./links";

import intro from "@/contents/intro.md";
import news from "@/contents/news.md";
import career from "@/contents/career.md";
import talks from "@/contents/talks.md";
import publications from "@/contents/publications.md";
import education from "@/contents/education.md";
import MyReactMarkdown from "./markdown";
import portraitPic from "../../public/portrait_2000w.webp";

// const playfairDisplay = Playfair_Display({ subsets: ["latin"], display: "swap" });
const roboto = Roboto({ weight: ["300", "400", "500", "700", "900", "100"], subsets: ["latin"], display: "swap" });

enum SectionType {
  Markdown,
  Gallery,
};

const sections = [
  {
    name: "NEWS",
    icon: FireIcon,
    type: SectionType.Markdown,
    content: news,
    collapsable: true,
    minElements: 2,
  },
  {
    name: "PROJECTS",
    icon: RocketLaunchIcon,
    type: SectionType.Gallery,
    content: [
      {
        name: "Produce 101 Ranker",
        img: {
          src: "/projects/produce_101_ranker.webp",
          alt: "Produce 101 Ranker",
          width: 1198,
          height: 886,
        },
        href: "https://github.com/produce101jpthegirls/produce101jpthegirls.github.io",
      },
    ],
  },
  {
    name: "CAREER",
    icon: BriefcaseIcon,
    type: SectionType.Markdown,
    content: career,
  },
  {
    name: "TALKS",
    icon: LightBulbIcon,
    type: SectionType.Markdown,
    content: talks,
  },
  {
    name: "PUBLICATIONS",
    icon: BookOpenIcon,
    type: SectionType.Markdown,
    content: publications,
  },
  {
    name: "EDUCATION",
    icon: AcademicCapIcon,
    type: SectionType.Markdown,
    content: education,
  }
];

export const Hero: FC = () => {
  const minOpacity = 0.1;
  const offsetBegin = 0;
  const offsetEnd = -120;

  useEffect(() => {
    if (window.innerWidth < 640) {
      const portrait = document.getElementById("portrait");
      if (portrait) {
        portrait.style.opacity = minOpacity.toString();
      }
    }

    function adjustOpacity() {
      const content = document.getElementById("content");
      const portrait = document.getElementById("portrait");
      if (content && portrait) {
        // Calculate the scroll progress with an easing function
        let progress = Math.min(Math.max(window.scrollY - offsetBegin, 0) / Math.max(window.innerHeight - portrait.clientHeight - offsetBegin - offsetEnd, 1), 1);
        progress = Math.min(Math.max(easeInOutExpo(progress), 0), 1);
        // Calculate the opacity of content
        const contentOpacity = (Math.round((1 - progress) * 100) / 100).toString();
        content.style.opacity = contentOpacity;
        // Calculate the opacity of portrait
        const portraitOpacity = minOpacity + progress * (1 - minOpacity);
        portrait.style.opacity = (Math.round(portraitOpacity * 100) / 100).toString();
      }
    }
    // Fade in the portrait and fade out the content when the user scrolls down. Vice versa.
    window.addEventListener("scroll", () => {
      // Only apply on sm view (640px)
      if (window.innerWidth < 640) {
        adjustOpacity();
      }
    });
    // Set correct opacity values when the window is resized
    window.addEventListener("resize", () => {
      const content = document.getElementById("content");
      const portrait = document.getElementById("portrait");
      if (content && portrait) {
        if (window.innerWidth < 640) {
          adjustOpacity();
        } else {
          content.style.opacity = "1";
          portrait.style.opacity = "1";
        }
      }
    });
  });

  return (
    <section className="min-h-screen relative">
      <div
        id="content"
        className="absolute sm:right-1/2 inset-y-0 z-10 flex flex-col sm:justify-center 
        sm:bg-none w-screen sm:w-fit"
      >
        <div className="pl-6 sm:pl-20 md:pl-32 xl:pl-40 pr-6 sm:pr-0 py-12 mr-0 md:-mr-18 xl:-mr-24">
          <h1
            style={roboto.style}
            className="tracking-[.015em]
            text-4xl leading-tight
            sm:text-5xl sm:leading-[1.1]
            md:text-6xl md:leading-[1.1]
            xl:text-7xl xl:leading-[1.1]"
          >
            <p className="font-light">Hello, I am</p>
            <p className="font-bold">Elvis</p>
          </h1>
          <div className="mt-1 sm:mt-2 ml-[2px] pb-60 sm:pb-0 text-base sm:text-lg">
            <div className="flex gap-4 items-center">
              <p className="font-base md:font-medium">aka Yujing Lin</p>
              <MyLink href="https://github.com/elvisyjlin" target="_blank" rel="noreferrer">
                <GithubIcon className="-mt-[2.5px] h-5 w-5 fill-current" />
              </MyLink>
              <MyLink href="https://www.linkedin.com/in/elvisyjlin" target="_blank" rel="noreferrer">
                <LinkedInIcon className="-mt-[2.5px] h-5 w-5 fill-current" />
              </MyLink>
            </div>
            <br />
            <br />
            <br />
            <MyReactMarkdown>{intro}</MyReactMarkdown>
            <br />
            <div className="mt-1 sm:mt-0 flex flex-wrap gap-x-1.5 sm:gap-x-2">
              {
                PAGE.skills
                  .map((item, index) => (
                    <MyLink key={index} href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  ))
                  .reduce(
                    (prev, curr) => prev.length > 0 ? prev.concat(["•", curr]) : prev.concat([curr]),
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
        className="absolute w-screen sm:w-3/4 sm:left-1/4 md:w-2/3 md:left-1/3 lg:w-1/2 lg:left-1/2 inset-y-0"
      >
        <Image
          priority
          id="portrait"
          src={portraitPic}
          alt="Portrait"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute bottom-0 opacity-0 sm:opacity-100 pl-10 lg:pl-0 ml-0 lg:-ml-20 pr-4 sm:pr-10 
          object-contain max-h-screen"
        />
      </div>
    </section>
  );
};

export const HeroPreview: FC = () => {
  return (
    <section className="min-h-screen relative">
      <div
        id="content"
        className="absolute sm:right-1/2 inset-y-0 z-10 flex flex-col sm:justify-center 
        sm:bg-none w-screen sm:w-fit"
      >
        <div className="pl-6 sm:pl-20 md:pl-32 xl:pl-40 pr-6 sm:pr-0 py-12 mr-0 md:-mr-18 xl:-mr-24">
          <h1
            style={roboto.style}
            className="tracking-[.015em]
            text-4xl leading-tight
            sm:text-5xl sm:leading-[1.1]
            md:text-6xl md:leading-[1.1]
            xl:text-7xl xl:leading-[1.1]"
          >
            <p className="font-light">Hello, I am</p>
            <p className="font-bold">Elvis</p>
          </h1>
          <div className="mt-6 sm:mt-10 ml-[2px] pb-60 sm:pb-0 text-lg sm:text-xl">
            <div className="flex gap-4 items-center">
              <p className="font-base md:font-medium">aka Yujing Lin</p>
              <GithubIcon className="-mt-[3px] h-6 w-6 fill-current" />
              <LinkedInIcon className="-mt-[3px] h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute w-screen sm:w-3/4 sm:left-1/4 md:w-2/3 md:left-1/3 lg:w-1/2 lg:left-1/2 inset-y-0"
      >
        <Image
          priority
          id="portrait"
          src={portraitPic}
          alt="Portrait"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute bottom-0 opacity-0 sm:opacity-100 pl-10 lg:pl-0 ml-0 lg:-ml-20 pr-4 sm:pr-10 
          object-contain max-h-screen"
        />
      </div>
    </section>
  );
};

type NamedSectionProps = {
  children?: ReactNode[] | ReactNode | string;
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  collapsable?: boolean;
  minElements?: number;
};

export const NamedSection: FC<NamedSectionProps> = ({
  children,
  name,
  Icon,
  collapsable,
  minElements,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [minHeight, setMinHeight] = useState<number>(216);
  const [maxHeight, setMaxHeight] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  const calcCollapseHeights = useCallback(() => {
    if (minElements && ref.current && ref.current.firstChild) {
      const childNodes = Array.from(ref.current.firstChild.childNodes as NodeListOf<HTMLParagraphElement>);
      let i = 0;
      let minHeight = 0;
      let maxHeight = 0;
      childNodes.filter((childNode) => childNode.nodeName === "P")
        .forEach((childNode) => {
          const height = childNode.offsetHeight;
          const style = window.getComputedStyle(childNode);
          const marginTop = parseInt(style.marginTop);
          const marginBottom = parseInt(style.marginBottom);
          const paddingTop = parseInt(style.paddingTop);
          const paddingBottom = parseInt(style.paddingBottom);
          const outerHeight = height + marginTop + marginBottom + paddingTop + paddingBottom;
          if (i < minElements) {
            minHeight += outerHeight;
          }
          maxHeight += outerHeight;
          i++;
        });
      setMinHeight(minHeight);
      setMaxHeight(maxHeight);
    }
  }, [minElements, setMinHeight, setMaxHeight]);

  useEffect(() => {
    if (collapsable && minElements) {
      calcCollapseHeights();
      window.addEventListener("resize", calcCollapseHeights);
      return () => window.removeEventListener("resize", calcCollapseHeights);
    }
  }, [collapsable, minElements, calcCollapseHeights]);

  useEffect(() => {
    if (collapsable && !collapsed && maxHeight && ref.current) {
      ref.current.style.height = maxHeight + "px";
    } else if (collapsable && collapsed && minHeight && ref.current) {
      ref.current.style.height = minHeight + "px";
    }
  }, [collapsable, collapsed, maxHeight, minHeight]);

  return (
    <FadeInSection>
      <div className="mb-8">
        <section className="sm:grid sm:grid-cols-12 gap-8 mx-auto max-w-[1200px]">
          <div className="mb-3 sm:mb-8 sm:col-span-4 lg:col-span-3 3xl:col-span-2 flex gap-2.5 text-zinc-600">
            <Icon className="h-5 mt-[2.5px]" />
            <h2 className="text-lg font-medium">{name}</h2>
          </div>
          <div
            className="sm:col-span-8 lg:col-span-9 3xl:col-span-10 overflow-hidden transition-all duration-700 ease-in"
            ref={ref}
          >{children}</div>
        </section>
        {collapsable && (
          <div className="flex justify-start sm:justify-center text-sm sm:text-base">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex items-center gap-1 text-[#a1a1aa] hover:text-amber-600 transition-color duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={
                `w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-700 ease-in ${collapsed ? "rotate-0" : "-rotate-180"}`
              }>
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
              </svg>
              <span className="w-[132px] text-left">{collapsed ? "Tap to Read More" : "Tap to Hide"}</span>
            </button>
          </div>
        )}
      </div>
    </FadeInSection>
  );
};

const createSectionContent = (type: SectionType, content: any) => {
  if (type === SectionType.Markdown) {
    return <MyReactMarkdown>{content}</MyReactMarkdown>;
  }
  if (type === SectionType.Gallery) {
    return (
      <div
        className="sm:grid lg:grid-cols-2"
      >{content.map((item: any, index: number) => (
        <Link key={index} className="flex flex-col gap-2 items-center group" href={item.href} target="_blank">
          <Image
            className="border border-[#131313] group-hover:border-amber-600 
            rounded overflow-hidden transition-color duration-300"
            src={item.img.src}
            alt={item.img.alt}
            width={item.img.width}
            height={item.img.height}
          />
          <div className="text-sm sm:text-base text-[#131313] group-hover:text-amber-600 
          transition-color duration-300">{item.name}</div>
        </Link>
      ))
        }</div>
    );
  }
  throw Error(`Unsupported section type: ${type}`);
};

export const Sections: FC = () => {
  return (
    <>{
      sections.map(({ name, icon, type, content, collapsable, minElements }) => (
        <NamedSection
          key={name}
          name={name}
          Icon={icon}
          collapsable={collapsable}
          minElements={minElements}
        >
          {createSectionContent(type, content)}
        </NamedSection>
      ))
    }</>
  )
};
