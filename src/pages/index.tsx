import { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "@/components/footer";
import { Hero, Sections } from "@/components/sections";
import { Source_Serif_Pro } from "@next/font/google";
import { GithubStats, YoutubeStats } from "@/components/stats";

// const lexend = Lexend({ subsets: ["latin"], display: "swap" });
const sourceSerifPro = Source_Serif_Pro({ weight: ["200", "300", "400", "600", "700", "900"], subsets: ["latin"], display: "swap" });
// const sourceSerif4 = Source_Serif_4({ weight: ["200", "300", "400", "600", "700", "900"], subsets: ["latin"], display: "swap" });

export const getStaticProps: GetStaticProps = async () => {
  const playlistStats = await fetch("https://youtube-view-stats.vercel.app/api/playlist/PLvTriPFFaqSPz2DisctrVnLgO2qvJpJ7T").then((res) => res.json());
  return {
    props: {
      playlistStats,
    },
    revalidate: 60 * 60 * 24,  // Revalidate every day
  };
};

export default function Home({ playlistStats }: { playlistStats: any }) {
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
          <Sections />
          <GithubStats />
          <YoutubeStats stats={playlistStats} />
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
