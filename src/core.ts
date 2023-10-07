export const fetchMyPlaylistStats = (): any => (
  fetch("https://youtube-view-stats.vercel.app/api/playlist/PLvTriPFFaqSPz2DisctrVnLgO2qvJpJ7T").then((res) => res.json())
);
