interface SidebarLinks {
  [key: string]: {
    link: string;
    label: string;
    icon: string;
  }[];
}

export const sidebarLinks: SidebarLinks = {
  interests: [
    {
      link: "https://anilist.co/user/ImRay/",
      label: "My AniList",
      icon: "iconify tabler--ghost-2",
    },
    {
      link: "https://open.spotify.com/user/s4i5cqkyu7n068b7f5139sl7m?si=kMeKkWd0TK-_wfRaPyeHow",
      label: "Playlists",
      icon: "iconify tabler--brand-spotify",
    },
    {
      link: "https://goodreads.com/rayshold",
      label: "Books",
      icon: "iconify tabler--bookmarks",
    },
    {
      link: "https://trakt.tv/users/imray",
      label: "Movies & Shows",
      icon: "iconify tabler--video",
    },
  ],
  others: [
    {
      link: "https://telegram.me/unikwalls",
      label: "Walls stash",
      icon: "iconify tabler--photo",
    },
  ],
};
