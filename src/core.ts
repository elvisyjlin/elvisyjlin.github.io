export type PlaylistStats = {
  url: string;
  videos: {
    id: string;
    thumbnail: string;
    viewCount: string;
    likeCount: string;
  }[];
};

export const fetchMyPlaylistStats = (): Promise<PlaylistStats> => (
  fetch("https://youtube-view-stats.vercel.app/api/playlist/PLvTriPFFaqSPz2DisctrVnLgO2qvJpJ7T")
    .then((res) => res.json())
    .then((data) => {
      // Only the following properties are used in the app.
      // - url
      // - videos[*].id
      // - videos[*].snippet.thumbnails.standard.url
      // - videos[*].statistics.viewCount
      // - videos[*].statistics.likeCount
      // So, delete other properties to reduce the size of the bundle.
      delete data["playlistItems"];
      delete data["playlists"];
      return {
        url: data.url,
        videos: data.videos.map((video: any) => ({
          id: video.id,
          thumbnail: video.snippet.thumbnails.standard.url,
          viewCount: video.statistics.viewCount,
          likeCount: video.statistics.likeCount
        })),
      };
    })
);
