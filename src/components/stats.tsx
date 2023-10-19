import { numberWithCommas } from "@/utils";
import { fetchMyPlaylistStats } from "@/core";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { UnderlineLink } from "./links";
import FadeInSection from "./fadein";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], display: "swap" });

export const GithubStats: FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>();

  const statsUrl = (
    "https://github-readme-stats.vercel.app/api" +
    "?username=elvisyjlin" +
    "&count_private=true" +
    "&theme=graywhite" +
    "&card_width=495" +
    "&show_icons=true" +
    "&disable_animations=true" +
    (screenWidth && screenWidth >= 640 ? "" : "&hide_rank=true")  // Hide rank if the window size is smaller than sm (640px)
  );

  const streakUrl = (
    "https://streak-stats.demolab.com/" +
    "?user=elvisyjlin" +
    "&mode=weekly" +
    "&theme=graywhite" +
    "&border=e5e7eb" +
    "&card_width=495"
  );

  const contribUrl = "https://ghchart.rshah.org/131313/elvisyjlin";

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-4 sm:gap-6 h-[80vh] sm:h-[100vh]">
      <FadeInSection>
        {/* <img
          src={statsUrl}
          alt="Github Stats of elvisyjlin"
          loading="lazy"
        /> */}
        <Image
          src={statsUrl}
          alt="Github Stats of elvisyjlin"
          width={495}
          height={195}
          loading="lazy"
          unoptimized
        />
      </FadeInSection>
      <FadeInSection>
        {/* <img
          src={streakUrl}
          alt="Github Weekly Streak Stats of elvisyjlin"
          loading="lazy"
        /> */}
        <Image
          src={streakUrl}
          alt="Github Weekly Streak Stats of elvisyjlin"
          width={495}
          height={195}
          loading="lazy"
          unoptimized
        />
      </FadeInSection>
      {/* Hide the Github contribution graph on small devices */}
      <FadeInSection className="hidden lg:block">
        <div className="p-6 border border-gray-200 rounded">
          {/* <img
            src={contribUrl}
            alt="Github Contributions of elvisyjlin"
          /> */}
          <Image
            src={contribUrl}
            alt="Github Contributions of elvisyjlin"
            // width={663}
            // height={104}
            width={730}
            height={114}
            unoptimized
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <UnderlineLink
          style={roboto.style}
          className="sm:text-lg font-medium scale-y-90 text-github-dark opacity-95"
          href="https://github.com/elvisyjlin"
          target="_blank"
          rel="noreferrer"
        >Visit My GitHub</UnderlineLink>
      </FadeInSection>
    </section>
  );
};

type ArrowProps = {
  className?: string;
  style?: any;
  onClick?: (event: any) => void;
};

const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div className={`${className} invisible sm:visible`} style={{ ...style }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-[#131313] hover:opacity-50 absolute -top-0.5 -left-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};

const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div className={`${className} invisible sm:visible`} style={{ ...style }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-[#131313] hover:opacity-50 absolute -top-0.5 left-0"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
};

type YoutubeStatsProps = {
  defaultStats: any;
};

export const YoutubeStats: FC<YoutubeStatsProps> = ({ defaultStats }) => {
  const [stats, setStats] = useState<any>(defaultStats);

  const views: number[] = stats.videos.map((video: any) => parseInt(video.statistics.viewCount));
  const totalViews = views.reduce((a, b) => a + b, 0);
  const likes: number[] = stats.videos.map((video: any) => parseInt(video.statistics.likeCount));
  const totalLikes = likes.reduce((a, b) => a + b, 0);

  useEffect(() => {
    fetchMyPlaylistStats().then((playlistStats: any) => setStats(playlistStats));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-4 sm:gap-6 h-[80vh] sm:h-[100vh]">
      <FadeInSection className="w-full">
        <h2 className="text-lg font-semibold text-center word-space-wide">DANCE VIDEOS</h2>
      </FadeInSection>
      <FadeInSection className="w-full sm:w-[507px] pb-3 sm:pb-1">
        <Slider
          dots
          autoplay
          autoplaySpeed={6000}
          centerPadding="0px"
          dotsClass="custom-slick-dots"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {stats.videos.slice(0, 5).map((video: any, index: number) => (
            <Link href={`https://youtu.be/${video.id}`} target="_blank" key={index}>
              <div id="playlist-cover-wrapper">
                <Image
                  id="playlist-cover"
                  src={video.snippet.thumbnails.standard.url}
                  alt="Playlist Cover"
                  width={320}
                  height={180}
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </Slider>
      </FadeInSection>
      <FadeInSection>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="font-semibold text-right pr-2">{numberWithCommas(totalViews)}</td>
              <td className="text-left">total views</td>
            </tr>
            <tr>
              <td className="font-semibold text-right pr-2">{numberWithCommas(totalLikes)}</td>
              <td className="text-left">total likes</td>
            </tr>
            <tr>
              <td className="font-semibold text-right pr-2">{numberWithCommas(stats.videos.length)}</td>
              <td className="text-left">videos</td>
            </tr>
          </tbody>
        </table>
      </FadeInSection>
      <FadeInSection>
        <UnderlineLink
          style={roboto.style}
          className="sm:text-lg font-medium scale-y-90 text-github-dark opacity-95"
          href={stats.url}
          target="_blank"
          rel="noreferrer"
        >Visit My Playlist</UnderlineLink>
      </FadeInSection>
    </section>
  )
};
