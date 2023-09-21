export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "UniTech",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Accordion",
      href: "/Accordion",
    },
    {
      title: "Books",
      href: "/Books",
    },
  ],
  links: {
    github: "https://github.com/CinemaCafe/next-template",
    docs: "https://ui.shadcn.com",
  },
}
