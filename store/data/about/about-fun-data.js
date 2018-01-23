const aboutVideoGames = {
  textCard: {
    type: 'banner',
    title: 'Gaming',
    desc: 'Bro! Get your controller and lets go!',
    icons: [
      {img: '/about/gaming/icons/stormtrooper-helmet.webp'},
      {img: '/about/gaming/icons/master-chief-helmet.webp', href: 'https://nodejs.org/'},
      {img: '/about/gaming/icons/titanfall-2-helmet.webp', href: 'http://parseplatform.org/'},
      {img: '/about/gaming/icons/psycho.webp', href: 'https://gulpjs.com/'},
      {img: '/about/gaming/icons/injustice-2-batman-head.webp', href: 'https://gulpjs.com/'},
      {img: '/about/gaming/icons/castle-crashers-head.webp', href: 'https://gulpjs.com/'}
    ],
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      '/about/star-wars-controller.webp',
      '/about/gaming/bf2-snipes.gif',
      '/about/gaming/titanfall2-swing.gif',
      '/about/gaming/halo5-tripple.gif'
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
      '/about/chey-doug-nyc.webp',
      '/about/adventures/chey-doug-mickey.webp',
      '/about/adventures/chey-doug-odin-car.webp',
      '/about/adventures/chey-doug-golf.webp',
      '/about/adventures/underoath.webp',
      '/about/adventures/drew-lynch-show.webp'
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
      '/about/sports/chey-doug-boxing.webp',
      '/about/sports/crossfit.webp',
      '/about/sports/penguin-gym.webp',
      '/about/sports/rangers-game.webp',
      '/about/sports/aggies-att-stadium.webp'
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
      '/shared/lego-avengers.webp',
      '/about/creativity/lego-star-wars.webp',
      '/about/creativity/todo-board.webp',
      '/about/creativity/white-board.webp',
      '/about/creativity/table-before.webp',
      '/about/creativity/table-after.webp'
    ]
  }
}

export const AboutFunClusters = [
  aboutVideoGames,
  aboutAdventures,
  aboutSports,
  aboutCreativity
]
