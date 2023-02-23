import Head from "next/head";
import Footer from "@/components/footer";
import { MyLink } from "@/components/links";
import { GithubStats, Hero, NamedSection } from "@/components/sections";
import { PAGE } from "@/constants";
import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon, FireIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { Lexend } from "@next/font/google";

const lexend = Lexend({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello, I am Elvis</title>
        <meta name="description" content="Hello, I am Elvis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main style={lexend.style} className="text-photo-black leading-snug sm:leading-normal">
        <Hero />
        <div className="min-h-screen mx-6 sm:mx-20 md:mx-32 xl:mx-40 my-12 sm:my-24 flex flex-col justify-center">
          <NamedSection name="Something New" Icon={FireIcon}>
            <ul className="font-light">
              <li>
                I led a team of 7 to participate in <MyLink href="https://www.blocktempo.com/taipei-ton-hackathon-registration-is-now-open/" target="_blank" rel="noreferrer">Taipei TON Hackathon</MyLink> and we got the 1st prize. There were around 50 applications in total, and 8 teams were selected to attend the on-site competition.
              </li>
              <div className="h-4" />
              <li>
                Genki, my startup, was selected as one of the teams in <MyLink href="https://appworks.tw/" target="_blank" rel="noreferrer">AppWorks Accelerator </MyLink>Batch #25.
              </li>
            </ul>
          </NamedSection>
          <NamedSection name="Career" Icon={BriefcaseIcon}>
            {PAGE.career.map((item, index) => (
              <ul key={index}>
                <li>
                  <div>
                    {item.position} <MyLink href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  </div>
                  {item.description && (
                    <div className="text-zinc-500 font-light text-sm sm:text-base">{item.description}</div>
                  )}
                </li>
              </ul>
            ))}
          </NamedSection>
          <NamedSection name="Talks" Icon={LightBulbIcon}>
            {PAGE.talks.map((item, index) => (
              <ul key={index}>
                <li>
                  <div>
                    {item.position} <MyLink href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  </div>
                  {item.description && (
                    <div className="text-zinc-500 font-light text-sm sm:text-base">{item.description}</div>
                  )}
                </li>
              </ul>
            ))}
          </NamedSection>
          <NamedSection name="Publications" Icon={BookOpenIcon}>
            <ul>
            {PAGE.publications.map((item, index) => (
              <li key={index} className="text-sm sm:text-base">
                <span className="font-light text-zinc-500">
                {item.authors.map((author, index) => (author === "Yu-Jing Lin" ? (
                    <span key={index}>
                      {index > 0 && <span>, </span>}
                      <b className="font-medium">Yu-Jing Lin</b>
                    </span>
                  ) : (
                    <span key={index}>
                      {index > 0 && <span>, </span>}
                      <span>{author}</span>
                    </span>
                  )))
                }.&nbsp;
                </span>
                <span>{item.name}.&nbsp;</span>
                <span className="font-light text-zinc-500">{item.description}&nbsp;</span>
                {item.link && (
                  <MyLink href={item.link} target="_blank" rel="noreferrer">[arXiv]</MyLink>
                )}
              </li>
            ))}
            </ul>
          </NamedSection>
          <NamedSection name="Education" Icon={AcademicCapIcon}>
            {PAGE.education.map((item, index) => (
              <ul key={index}>
                <li>
                  <div>
                    {item.position} <MyLink href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  </div>
                  {item.description && (
                    <div className="text-zinc-500 font-light text-sm sm:text-base">{item.description}</div>
                  )}
                </li>
              </ul>
            ))}
          </NamedSection>
          <GithubStats />
        </div>
        <Footer />
     
        {/* <div className="opacity-30">
          <div>
              <svg
                viewBox="0 0 500 500"
                preserveAspectRatio="xMinYMin meet"
                className={"inline-block absolute top-0 left-0 z-[-2] " + styles.wave}
              >
                    
                  <path d="M0, 100 C150, 200 350,
                      0 500, 100 L500, 00 L0, 0 Z"
                      className="stroke-none fill-[#1E90E1] opacity-50">
                  </path>
              </svg>
          </div>
          <div>
              <svg
                viewBox="0 0 500 500"
                preserveAspectRatio="xMinYMin meet"
                className={"inline-block absolute top-0 left-0 z-[-1] " + styles.wave}
              >
                    
                  <path d="M0, 80 C300, 0 400,
                      300 500, 50 L500, 00 L0, 0 Z"
                      className="stroke-none fill-[#9932CC] opacity-50">
                  </path>
              </svg>
          </div>
          <div>
              <svg
                viewBox="0 0 500 500"
                preserveAspectRatio="xMinYMin meet"
                className={"inline-block absolute top-0 left-0 z-[-3] " + styles.wave}
              >
                    
                  <path d="M0, 100 C150, 300 350,
                      0 500, 100 L500, 00 L0, 0 Z"
                      className="stroke-none fill-[#DC143C] opacity-50">
                  </path>
              </svg>
          </div>
        </div> */}
      </main>
    </>
  )
}
