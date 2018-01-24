import {photosUrl} from '../../config'

const AboutCard = {
  title: 'About',
  img: photosUrl + '/home/chey-doug-bridge.png',
  btn: {
    to: '/about',
    text: 'More'
  },
  height: 800
}

const PortfolioCard = {
  title: 'Portfolio',
  img: photosUrl + '/home/coffee-and-code.png',
  btn: {
    to: '/portfolio',
    text: 'More'
  },
  height: 600
}

const ResumeCard = {
  title: 'Resume',
  img: photosUrl + '/home/odin-codin.png',
  btn: {
    to: '/resume',
    text: 'More'
  },
  height: 800
}

const OpenSourceCard = {
  title: 'Open Source',
  img: photosUrl + '/shared/lego-avengers.png',
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
