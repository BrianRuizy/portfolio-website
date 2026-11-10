export type ToolItem = { title: string; href?: string; description: string }
export type ToolGroup = { title: string; tools: ToolItem[] }

export const toolGroups: ToolGroup[] = [
  {
    title: 'Everyday carry',
    tools: [
      {
        title: 'AirPods Max',
        href: 'https://amzn.to/3mie64b',
        description: 'For focused desk work, commuting, and travel.',
      },
      {
        title: 'Apple MacBook Pro M1 Pro',
        href: 'https://amzn.to/41fkhEH',
        description:
          'A capable laptop for development, editing, and working on the go.',
      },
      {
        title: 'Samsung T7 Shield SSD',
        href: 'https://amzn.to/3vwoD03',
        description: 'Portable storage for editing projects and video footage.',
      },
      {
        title: 'Urth Arkose backpack',
        href: 'https://amzn.to/49d888x',
        description: 'A sleek, water-resistant bag for daily essentials.',
      },
    ],
  },
  {
    title: 'Workstation',
    tools: [
      {
        title: 'Apple Magic Keyboard with Touch ID',
        href: 'https://amzn.to/4hqtEeo',
        description:
          'A quiet, wireless keyboard with Touch ID for everyday use.',
      },
      {
        title: 'Apple Studio Display',
        href: 'https://amzn.to/3TTDg7d',
        description: 'My main display for development, design, and editing.',
      },
      {
        title: 'Herman Miller Aeron',
        description:
          'Bought secondhand, and still one of the most important parts of my workspace.',
      },
      {
        title: 'Shure SM7dB',
        href: 'https://amzn.to/4w5vRRS',
        description: 'A desk microphone for meetings and voiceovers.',
      },
      {
        title: 'Vernal Core3 standing desk',
        href: 'https://www.vernalspace.com/products/vernal-solid-wood-standing-desk',
        description:
          'A solid walnut desk that makes long work sessions more comfortable.',
      },
    ],
  },
  {
    title: 'Camera gear',
    tools: [
      {
        title: 'Peak Design carbon fiber tripod',
        href: 'https://amzn.to/43CoF31',
        description:
          'Light enough to bring along and sturdy enough for real work.',
      },
      {
        title: 'Sennheiser MKE 400',
        href: 'https://www.amazon.com/dp/B08YS34YRS',
        description:
          'A compact on-camera microphone for talking directly to camera.',
      },
      {
        title: 'Sony 16–35mm f/2.8 GM II',
        href: 'https://www.amazon.com/dp/B0CGTW24VF',
        description:
          'An ultra-wide lens for small spaces and capturing the full scene.',
      },
      {
        title: 'Sony 24–70mm f/2.8 GM II',
        href: 'https://amzn.to/3TABciO',
        description: 'A versatile everyday lens for video and photos.',
      },
      {
        title: 'Sony 40mm f/2.5 G',
        href: 'https://amzn.to/3YTBdCz',
        description: 'A lightweight lens for minimal street photography.',
      },
      {
        title: 'Sony a7C II',
        href: 'https://amzn.to/3TQbJmO',
        description: 'A compact full-frame camera for exploring New York City.',
      },
      {
        title: 'Sony FX3',
        href: 'https://amzn.to/3TR2lzz',
        description: 'A dedicated video camera for learning and making films.',
      },
    ],
  },
  {
    title: 'Home',
    tools: [
      {
        title: 'Apple TV 4K',
        href: 'https://www.apple.com/apple-tv-4k/',
        description:
          'The hub for sports, movies, and YouTube in the living room.',
      },
      {
        title: 'Cowboy Classic v4',
        href: 'https://cowboy.bike/',
        description:
          'A beautifully designed e-bike for getting around the city.',
      },
      {
        title: 'LG C4 OLED',
        href: 'https://amzn.to/3ZRVet8',
        description: 'A 55-inch OLED TV paired with a Sonos Beam.',
      },
      {
        title: 'Philips Hue',
        href: 'https://www.philips-hue.com/',
        description:
          'Smart lighting for a little extra warmth around the apartment.',
      },
      {
        title: 'Sonos Era 100',
        href: 'https://www.sonos.com/en-us/shop/era-100',
        description: 'Rich sound for listening without headphones.',
      },
    ],
  },
]
