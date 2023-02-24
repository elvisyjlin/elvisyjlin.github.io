import Head from "next/head";
import Footer from "@/components/footer";
import { MyLink } from "@/components/links";
import { GithubStats, Hero, NamedSection } from "@/components/sections";
import { PAGE } from "@/constants";
import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon, FireIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { Source_Serif_Pro } from "@next/font/google";

// const lexend = Lexend({ subsets: ["latin"], display: "swap" });
const sourceSerifPro = Source_Serif_Pro({ weight: ["200", "300", "400", "600", "700", "900"], subsets: ["latin"], display: "swap" });
// const sourceSerif4 = Source_Serif_4({ weight: ["200", "300", "400", "600", "700", "900"], subsets: ["latin"], display: "swap" });

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
      <main style={sourceSerifPro.style} className="text-lg text-photo-black leading-snug sm:leading-normal">
        <Hero />
        <div className="min-h-screen mx-6 sm:mx-20 md:mx-32 xl:mx-40 my-12 sm:my-24 flex flex-col justify-center">
          <NamedSection name="NEWS" Icon={FireIcon}>
            <ul>
              <li>
                <p>I led a team of 7 to participate in <MyLink href="https://www.blocktempo.com/taipei-ton-hackathon-registration-is-now-open/" target="_blank" rel="noreferrer">Taipei TON Hackathon</MyLink> and we got the 1st prize. There were around 50 applications in total, and 8 teams were selected to attend the on-site competition.</p>
              </li>
              <div className="h-4" />
              <li>
                <p>Genki, my startup, was selected as one of the teams in <MyLink href="https://appworks.tw/" target="_blank" rel="noreferrer">AppWorks Accelerator </MyLink>Batch #25.</p>
              </li>
            </ul>
          </NamedSection>
          <NamedSection name="CAREER" Icon={BriefcaseIcon}>
            {PAGE.career.map((item, index) => (
              <ul key={index}>
                <li>
                  <div>
                    {item.position} <MyLink href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  </div>
                  {item.description && (
                    <div className="text-zinc-400 text-base sm:text-lg">{item.description}</div>
                  )}
                </li>
              </ul>
            ))}
          </NamedSection>
          <NamedSection name="TALKS" Icon={LightBulbIcon}>
            {PAGE.talks.map((item, index) => (
              <ul key={index}>
                <li>
                  <div>
                    {item.position} <MyLink href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  </div>
                  {item.description && (
                    <div className="text-zinc-400 text-base sm:text-lg">{item.description}</div>
                  )}
                </li>
              </ul>
            ))}
          </NamedSection>
          <NamedSection name="PUBLICATIONS" Icon={BookOpenIcon}>
            <ul>
              {PAGE.publications.map((item, index) => (
                <li key={index} className="text-base sm:text-lg">
                  <span className="text-zinc-400">
                    {item.authors.map((author, index) => (author === "Yu-Jing Lin" ? (
                      <span key={index}>
                        {index > 0 && <span>, </span>}
                        <MyLink href="https://arxiv.org/search/cs?query=Lin%2C+Yu-Jing&searchtype=author">Yu-Jing Lin</MyLink>
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
                  <span className="text-zinc-400">{item.description}&nbsp;</span>
                  {item.link && (
                    <MyLink href={item.link} target="_blank" rel="noreferrer">[arXiv]</MyLink>
                  )}
                </li>
              ))}
            </ul>
          </NamedSection>
          <NamedSection name="EDUCATION" Icon={AcademicCapIcon}>
            {PAGE.education.map((item, index) => (
              <ul key={index}>
                <li>
                  <div>
                    {item.position} <MyLink href={item.link} target="_blank" rel="noreferrer">{item.name}</MyLink>
                  </div>
                  {item.description && (
                    <div className="text-zinc-400 text-base sm:text-lg">{item.description}</div>
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
