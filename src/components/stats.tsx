import { Roboto } from "@next/font/google";
import { numberWithCommas } from "@/utils";
import { FC, useEffect, useState } from "react";
import { UnderlineLink } from "./links";
import FadeInSection from "./fadein";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], display: "swap" });

export const GithubStats: FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 sm:gap-6 my-16">
      <FadeInSection>
        <img
          src={
            "https://github-readme-stats.vercel.app/api?" +
            "username=elvisyjlin" +
            "&count_private=true" +
            "&theme=graywhite" +
            "&show_icons=true" +
            "&disable_animations=true" +
            (screenWidth && screenWidth >= 640 ? "" : "&hide_rank=true")  // Hide rank if the window size is smaller than sm (640px)
          }
          alt="Github Stats of elvisyjlin"
          loading="lazy"
        />
        {/* <Image
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
        /> */}
      </FadeInSection>
      {/* Hide the Github contribution graph on small devices */}
      <FadeInSection className="hidden lg:block">
        <div className="p-6 border border-gray-200 rounded">
          <img
            src="https://ghchart.rshah.org/131313/elvisyjlin"
            alt="Github Contributions of elvisyjlin"
          />
          {/* <Image
            src="https://ghchart.rshah.org/131313/elvisyjlin"
            alt="Github Contributions of elvisyjlin"
            // width={663}
            // height={104}
            width={730}
            height={114}
          /> */}
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

type YoutubeStatsProps = {
  stats: any;
};

export const YoutubeStats: FC<YoutubeStatsProps> = ({ stats }) => {
  console.log(stats);
  const imgUrl = stats.playlists[0].snippet.thumbnails.standard.url;
  const views: number[] = stats.videos.map((video: any) => parseInt(video.statistics.viewCount));
  const totalViews = views.reduce((a, b) => a + b, 0);
  const likes: number[] = stats.videos.map((video: any) => parseInt(video.statistics.likeCount));
  const totalLikes = likes.reduce((a, b) => a + b, 0);
  return (
    <section className="flex flex-col items-center gap-4 sm:gap-6 my-16">
      <FadeInSection className="w-full">
        <div id="playlist-cover-wrapper">
          <img
            id="playlist-cover"
            src={imgUrl}
            alt="Playlist Cover"
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="text-center">
          <span className="font-bold">{numberWithCommas(totalViews)}</span> views
        </div>
        <div className="text-center">
          <span className="font-bold">{numberWithCommas(totalLikes)}</span> likes
        </div>
        <div className="text-center">
          <span className="font-bold">{numberWithCommas(stats.videos.length)}</span> videos
        </div>
      </FadeInSection>
      <FadeInSection>
        <UnderlineLink
          style={roboto.style}
          className="sm:text-lg font-semibold scale-y-90 text-github-dark opacity-95"
          href={stats.url}
          target="_blank"
          rel="noreferrer"
        >Visit My YouTube Playlist</UnderlineLink>
      </FadeInSection>
    </section>
  )
};
