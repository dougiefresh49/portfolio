const AboutCard = {
  title: 'About',
  img: '/photos/home/chey-doug-bridge-md.png',
  btn: {
    to: '/about',
    text: 'More'
  },
  height: 800
}

const PortfolioCard = {
  title: 'Portfolio',
  img: '/photos/home/coffee-and-code-md.png',
  btn: {
    to: '/portfolio',
    text: 'More'
  },
  height: 600
}

const ResumeCard = {
  title: 'Resume',
  img: '/photos/home/odin-codin-md.png',
  btn: {
    to: '/resume',
    text: 'More'
  },
  height: 800
}

const OpenSourceCard = {
  title: 'Open Source',
  img: '/photos/shared/lego-avengers-md.png',
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
