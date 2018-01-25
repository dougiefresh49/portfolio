const aboutVideoGames = {
  textCard: {
    type: 'banner',
    title: 'Gaming',
    desc: 'Bro! Get your controller and lets go!',
    icons: [
      {img: '/photos/about/gaming/icons/stormtrooper-helmet.png'},
      {img: '/photos/about/gaming/icons/master-chief-helmet.png', href: 'https://nodejs.org/'},
      {img: '/photos/about/gaming/icons/titanfall-2-helmet.png', href: 'http://parseplatform.org/'},
      {img: '/photos/about/gaming/icons/psycho.png', href: 'https://gulpjs.com/'},
      {img: '/photos/about/gaming/icons/injustice-2-batman-head.png', href: 'https://gulpjs.com/'},
      {img: '/photos/about/gaming/icons/castle-crashers-head.png', href: 'https://gulpjs.com/'}
    ],
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      '/photos/about/star-wars-controller-md.png',
      '/photos/about/gaming/bf2-snipes.gif',
      '/photos/about/gaming/titanfall2-swing.gif',
      '/photos/about/gaming/halo5-tripple.gif'
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
      '/photos/about/chey-doug-nyc.png',
      '/photos/about/adventures/chey-doug-mickey.png',
      '/photos/about/adventures/chey-doug-odin-car.png',
      '/photos/about/adventures/chey-doug-golf.png',
      '/photos/about/adventures/underoath.png',
      '/photos/about/adventures/drew-lynch-show-md.png'
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
      '/photos/about/sports/chey-doug-boxing.png',
      '/photos/about/sports/crossfit.png',
      '/photos/about/sports/penguin-gym.png',
      '/photos/about/sports/rangers-game-md.png',
      '/photos/about/sports/aggies-att-stadium-md.png'
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
      '/photos/shared/lego-avengers-md.png',
      '/photos/about/creativity/lego-star-wars-md.png',
      '/photos/about/creativity/todo-board.png',
      '/photos/about/creativity/white-board.png',
      '/photos/about/creativity/table-before-md.png',
      '/photos/about/creativity/table-after-md.png'
    ]
  }
}

export const AboutFunClusters = [
  aboutVideoGames,
  aboutAdventures,
  aboutSports,
  aboutCreativity
]
