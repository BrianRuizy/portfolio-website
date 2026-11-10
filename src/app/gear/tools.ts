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
          'Over-ear headphones for focused desk work, commuting, and travel; AirPods Pro are a lighter option for everyday listening.',
      },
      {
        title: 'Apple MacBook Pro M1 Pro',
        href: 'https://amzn.to/41fkhEH',
        description:
          'A capable 16-inch laptop with a mini-LED display for development, editing, and multitasking on the go.',
      },
      {
        title: 'Samsung T7 Shield SSD',
        href: 'https://amzn.to/3vwoD03',
        description:
          'Rugged portable storage for editing projects and recording ProRes footage.',
      },
      {
        title: 'Urth Arkose backpack',
        href: 'https://amzn.to/49d888x',
        description: 'A sleek, water-resistant backpack for daily tech essentials.',
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
          'A simple wireless keyboard with Touch ID, paired with the Logitech MX Master 3S.',
      },
      {
        title: 'Apple Studio Display',
        href: 'https://amzn.to/3TTDg7d',
        description:
          'A main display for development, design, and editing, paired with a BenQ ScreenBar Halo to reduce eye strain.',
      },
      {
        title: 'Herman Miller Aeron',
        description:
          'An ergonomic design classic; a secondhand option can make it a practical centerpiece for a workspace.',
      },
      {
        title: 'Shure SM7dB',
        href: 'https://amzn.to/4w5vRRS',
        description:
          'A broadcast-style microphone for calls and voiceovers, mounted within easy reach.',
      },
      {
        title: 'Vernal Core3 standing desk',
        href: 'https://www.vernalspace.com/products/vernal-solid-wood-standing-desk',
        description:
          'A solid walnut top on a white frame, creating a comfortable and minimal foundation for long work sessions.',
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
          'A lightweight carbon-fiber tripod with the stability needed for travel and production work.',
      },
      {
        title: 'Sennheiser MKE 400',
        href: 'https://www.amazon.com/dp/B08YS34YRS',
        description:
          'A compact shotgun microphone for direct-to-camera recording, with clear audio and minimal added weight.',
      },
      {
        title: 'Sony 16–35mm f/2.8 GM II',
        href: 'https://www.amazon.com/dp/B0CGTW24VF',
        description:
          'An ultra-wide zoom lens for interiors, compact spaces, and expansive scenes.',
      },
      {
        title: 'Sony 24–70mm f/2.8 GM II',
        href: 'https://amzn.to/3TABciO',
        description:
          'A versatile workhorse zoom for tighter cinematic framing and everyday video production.',
      },
      {
        title: 'Sony 40mm f/2.5 G',
        href: 'https://amzn.to/3YTBdCz',
        description: 'A compact prime lens suited to lightweight street photography.',
      },
      {
        title: 'Sony a7C II',
        href: 'https://amzn.to/3TQbJmO',
        description:
          'A compact full-frame camera body for street photography and travel.',
      },
      {
        title: 'Sony FX3',
        href: 'https://amzn.to/3TR2lzz',
        description:
          'A cinema camera with professional video features for learning and producing high-quality footage.',
      },
    ],
  },
]
