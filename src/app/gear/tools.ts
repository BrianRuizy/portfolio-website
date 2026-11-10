export type ToolItem = {
  title: string
  href?: string
  description: string
}

export type ToolGroup = {
  title: string
  tools: ToolItem[]
}

export const toolGroups: ToolGroup[] = [
  {
    title: 'Everyday carry',
    tools: [
      {
        title: 'AirPods Max',
        href: 'https://amzn.to/3mie64b',
        description:
          'For focused desk work, commuting, and travel. AirPods Pro are the lighter everyday pair.',
      },
      {
        title: 'Apple MacBook Pro M1 Pro',
        href: 'https://amzn.to/41fkhEH',
        description:
          'Awesome mini-LED display in 16 inch, perfect for multitasking on the go, though it is a bit hefty.',
      },
      {
        title: 'Samsung T7 Shield SSD',
        href: 'https://amzn.to/3vwoD03',
        description:
          'Portable storage for editing projects and recording ProRes footage.',
      },
      {
        title: 'Urth Arkose backpack',
        href: 'https://amzn.to/49d888x',
        description:
          'Sleek and water resistant. Holds the daily tech essentials.',
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
          'I moved away from mechanical keyboards in favor of something wireless and simple. Touch ID is handy, too. I pair it with a Logitech MX Master 3S.',
      },
      {
        title: 'Apple Studio Display',
        href: 'https://amzn.to/3TTDg7d',
        description:
          'Main display for development, design, and editing. BenQ ScreenBar Halo sits on top for reducing eye strain.',
      },
      {
        title: 'Herman Miller Aeron',
        description:
          'A design icon. Bought secondhand, still one of the most important parts of the workspace.',
      },
      {
        title: 'Shure SM7dB',
        href: 'https://amzn.to/4w5vRRS',
        description:
          'A near-perfect mic that stays mounted on the desk for meetings and the voiceovers I do.',
      },
      {
        title: 'Vernal Core3 standing desk',
        href: 'https://www.vernalspace.com/products/vernal-solid-wood-standing-desk',
        description:
          'Solid walnut hardwood on a white frame. A clean, comfortable foundation for long coding sessions that still feels minimal.',
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
          'Light enough to actually bring along, sturdy enough for real work, and it looks so nice.',
      },
      {
        title: 'Sennheiser MKE 400',
        href: 'https://www.amazon.com/dp/B08YS34YRS',
        description:
          'Shotgun mic for talking directly to camera. Adds very little weight to the setup, still crispy sound.',
      },
      {
        title: 'Sony 16–35mm f/2.8 GM II',
        href: 'https://www.amazon.com/dp/B0CGTW24VF',
        description:
          'My ultra-wide. Cost a pretty penny, but perfect for capturing small settings or the full picture.',
      },
      {
        title: 'Sony 24–70mm f/2.8 GM II',
        href: 'https://amzn.to/3TABciO',
        description:
          'The workhorse lens on the FX3, what I reach for to capture tight cinematic shots.',
      },
      {
        title: 'Sony 40mm f/2.5 G',
        href: 'https://amzn.to/3YTBdCz',
        description: 'Perfect for lightweight, minimal street photography.',
      },
      {
        title: 'Sony a7C II',
        href: 'https://amzn.to/3TQbJmO',
        description:
          'Compact full-frame body for street photography around New York City.',
      },
      {
        title: 'Sony FX3',
        href: 'https://amzn.to/3TR2lzz',
        description:
          "My dream camera. It can feel like overkill, but using it you understand why it's so loved. This camera forces you to learn more about videography, and that's why I love it myself.",
      },
    ],
  },
]
