import {photosUrl} from '../../../config'

const aboutVideoGames = {
  textCard: {
    type: 'banner',
    title: 'Gaming',
    desc: 'Bro! Get your controller and lets go!',
    icons: [
      {img: photosUrl + '/about/gaming/icons/stormtrooper-helmet.png'},
      {img: photosUrl + '/about/gaming/icons/master-chief-helmet.png', href: 'https://nodejs.org/'},
      {img: photosUrl + '/about/gaming/icons/titanfall-2-helmet.png', href: 'http://parseplatform.org/'},
      {img: photosUrl + '/about/gaming/icons/psycho.png', href: 'https://gulpjs.com/'},
      {img: photosUrl + '/about/gaming/icons/injustice-2-batman-head.png', href: 'https://gulpjs.com/'},
      {img: photosUrl + '/about/gaming/icons/castle-crashers-head.png', href: 'https://gulpjs.com/'}
    ],
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/star-wars-controller.png',
      photosUrl + '/about/gaming/bf2-snipes.gif',
      photosUrl + '/about/gaming/titanfall2-swing.gif',
      photosUrl + '/about/gaming/halo5-tripple.gif'
    ]
  }
}
const aboutAdventures = {
  textCard: {
    type: 'banner',
    title: 'Adventures',
    desc: 'We make everyday an adventure',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/chey-doug-nyc.png',
      photosUrl + '/about/adventures/chey-doug-mickey.png',
      photosUrl + '/about/adventures/chey-doug-odin-car.png',
      photosUrl + '/about/adventures/chey-doug-golf.png',
      photosUrl + '/about/adventures/underoath.png',
      photosUrl + '/about/adventures/drew-lynch-show.png'
    ]
  }
}

const aboutSports = {
  textCard: {
    type: 'banner',
    title: 'Sports',
    desc: '',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/sports/chey-doug-boxing.png',
      photosUrl + '/about/sports/crossfit.png',
      photosUrl + '/about/sports/penguin-gym.png',
      photosUrl + '/about/sports/rangers-game.png',
      photosUrl + '/about/sports/aggies-att-stadium.png'
    ]
  }
}

const aboutCreativity = {
  textCard: {
    type: 'banner',
    title: 'Creativity',
    desc: 'My name is Doug and I like to play with Legos. #foreverAKidAtHeart',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/shared/lego-avengers.png',
      photosUrl + '/about/creativity/lego-star-wars.png',
      photosUrl + '/about/creativity/todo-board.png',
      photosUrl + '/about/creativity/white-board.png',
      photosUrl + '/about/creativity/table-before.png',
      photosUrl + '/about/creativity/table-after.png'
    ]
  }
}

export const AboutFunClusters = [
  aboutVideoGames,
  aboutAdventures,
  aboutSports,
  aboutCreativity
]
