import { numberWithCommas } from "@/utils";
import { PlaylistStats, fetchMyPlaylistStats } from "@/core";
import { Noto_Sans, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { UnderlineLink } from "./links";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const notoSans = Noto_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], display: "swap" });

export const GithubStats: FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>();

  const statsUrl = (
    "https://github-readme-stats.vercel.app/api" +
    "?username=elvisyjlin" +
    "&count_private=true" +
    "&theme=graywhite" +
    (screenWidth && (screenWidth >= 640) ? "&card_width=495" : "") +
    "&show_icons=true" +
    "&disable_animations=true" +
    (screenWidth && (screenWidth >= 640) ? "" : "&hide_rank=true")  // Hide rank if the window size is smaller than sm (640px)
  );

  const streakUrl = (
    "https://streak-stats.demolab.com/" +
    "?user=elvisyjlin" +
    "&mode=weekly" +
    "&theme=graywhite" +
    "&border=e5e7eb" +
    (screenWidth && (screenWidth >= 640) ? "&card_width=495" : `&card_width=${screenWidth ?? 495}`) +
    "&hide_current_streak=false"
  );

  const contribUrl = "https://ghchart.rshah.org/131313/elvisyjlin";

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-4 sm:gap-6 h-[90vh]">
      <div>
        <Image
          src={statsUrl}
          alt="Github Stats of elvisyjlin"
          width={495}
          height={195}
          loading="lazy"
          unoptimized
        />
      </div>
      <div>
        <Image
          src={streakUrl}
          alt="Github Weekly Streak Stats of elvisyjlin"
          width={495}
          height={195}
          loading="lazy"
          unoptimized
        />
      </div>
      {/* Hide the Github contribution graph on small devices */}
      <div className="hidden lg:block">
        <div className="p-6 border border-gray-200 rounded">
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
      </div>
      <div className="hidden lg:block">
        <img
          src={
            "https://github-profile-trophy.vercel.app/?username=elvisyjlin" +
            (screenWidth && screenWidth > 1024 ? "&row=1&column=8" : "&row=2&column=4")
          }
        />
      </div>
      <div>
        <UnderlineLink
          style={roboto.style}
          className="sm:text-lg font-medium scale-y-90 text-github-dark opacity-95"
          href="https://github.com/elvisyjlin"
          target="_blank"
          rel="noreferrer"
        >Visit My GitHub</UnderlineLink>
      </div>
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
  defaultStats: PlaylistStats;
};

export const YoutubeStats: FC<YoutubeStatsProps> = ({ defaultStats }) => {
  const [stats, setStats] = useState<PlaylistStats>(defaultStats);

  const views: number[] = stats.videos.map((video) => parseInt(video.viewCount));
  const totalViews = views.reduce((a, b) => a + b, 0);
  const likes: number[] = stats.videos.map((video) => parseInt(video.likeCount));
  const totalLikes = likes.reduce((a, b) => a + b, 0);

  useEffect(() => {
    fetchMyPlaylistStats().then((playlistStats: PlaylistStats) => setStats(playlistStats));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-4 sm:gap-6 lg:mt-20 h-[90vh]">
      <div className="w-full">
        <h2 className="text-lg font-semibold text-center word-space-wide" style={notoSans.style}>DANCE VIDEOS</h2>
      </div>
      <div className="w-full sm:w-[507px] pb-3 sm:pb-1">
        <Slider
          dots
          autoplay
          autoplaySpeed={6000}
          centerPadding="0px"
          dotsClass="custom-slick-dots"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {stats.videos.slice(0, 5).map((video, index) => (
            <Link href={`https://youtu.be/${video.id}`} target="_blank" key={index}>
              <div id="playlist-cover-wrapper">
                <Image
                  id="playlist-cover"
                  src={video.thumbnail}
                  alt="Playlist Cover"
                  width={320}
                  height={180}
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div>
        <table className="table-auto mt-1.5 sm:mt-3" style={notoSans.style}>
          <tbody>
            <tr>
              <td className="align-bottom font-semibold text-right pr-2 sm:font-semibold sm:text-xl">{numberWithCommas(totalViews)}</td>
              <td className="align-bottom text-left text-sm sm:text-base">total views</td>
            </tr>
            <tr>
              <td className="align-bottom font-semibold text-right pr-2 sm:font-semibold sm:text-xl">{numberWithCommas(totalLikes)}</td>
              <td className="align-bottom text-left text-sm sm:text-base">total likes</td>
            </tr>
            <tr>
              <td className="align-bottom font-semibold text-right pr-2 sm:font-semibold sm:text-xl">{numberWithCommas(stats.videos.length)}</td>
              <td className="align-bottom text-left text-sm sm:text-base">videos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <UnderlineLink
          style={roboto.style}
          className="sm:text-lg font-medium scale-y-90 text-github-dark opacity-95"
          href={stats.url}
          target="_blank"
          rel="noreferrer"
        >Watch My Videos</UnderlineLink>
      </div>
    </section>
  )
};
