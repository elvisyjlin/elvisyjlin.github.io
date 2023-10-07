import Head from "next/head";
import { HeroPreview } from "@/components/sections";
import { Source_Serif_Pro } from "@next/font/google";

const sourceSerifPro = Source_Serif_Pro({ weight: ["200", "300", "400", "600", "700", "900"], subsets: ["latin"], display: "swap" });

export default function Preview() {
  return (
    <>
      <Head>
        <title>Preview</title>
        <meta name="description" content="Preview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main style={sourceSerifPro.style} className="text-lg text-photo-black leading-snug sm:leading-normal">
        <HeroPreview />
      </main>
    </>
  )
}
