export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "ABOUT US",
      href: "/",
    },
    {
      label: "PORTOFOLIO",
      href: "/docs",
    },
    {
      label: "INFORMATION",
      href: "/pricing",
    },

  ],
  navMenuItems: [
    {
      label: "ABOUT US",
      href: "/",
    },
    {
      label: "PORTOFOLIO",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
