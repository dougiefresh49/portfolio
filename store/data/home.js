const AboutCard = {
  title: 'About',
  img: '/home/chey-doug-bridge.webp',
  btn: {
    to: '/about',
    text: 'More'
  },
  height: 800
}

const PortfolioCard = {
  title: 'Portfolio',
  img: '/home/coffee-and-code.webp',
  btn: {
    to: '/portfolio',
    text: 'More'
  },
  height: 600
}

const ResumeCard = {
  title: 'Resume',
  img: '/home/odin-codin.webp',
  btn: {
    to: '/resume',
    text: 'More'
  },
  height: 800
}

const OpenSourceCard = {
  title: 'Open Source',
  img: '/shared/lego-avengers.webp',
  btn: {
    to: '/open-source',
    text: 'More'
  },
  height: 600
}

export const HomeCards = [
  AboutCard,
  OpenSourceCard,
  PortfolioCard,
  ResumeCard
]

export default HomeCards
