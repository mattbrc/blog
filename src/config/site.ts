export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "AG Blog",
  description:
    "Minimalist blog inspired by Bearblog. Recreation from the primary Acid Gambit blog at acidgambit.substack.com",
  url: "https://blog.acidgambit.com",
  links: {
    twitter: "https://twitter.com/acidgambit_",
    github: "https://github.com/mattbrc/blog",
  },
}