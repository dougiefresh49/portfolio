const aboutVideoGames = {
  textCard: {
    type: 'banner',
    title: 'Gaming',
    desc: 'Bro! Get your controller and lets go!',
    icons: [
      {img: '/game-logos/stormtrooper-helmet.jpg'},
      {img: '/game-logos/master-chief-helmet.jpg', href: 'https://nodejs.org/'},
      {img: '/game-logos/titanfall-2-helmet.png', href: 'http://parseplatform.org/'},
      {img: '/game-logos/psycho.jpeg', href: 'https://gulpjs.com/'},
      {img: '/game-logos/injustice-2-batman-head.png', href: 'https://gulpjs.com/'},
      {img: '/game-logos/castle-crashers-head.png', href: 'https://gulpjs.com/'}
    ],
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      '/star-wars-controller.jpg',
      '/bf2-snipes.gif',
      '/titanfall2-swing.gif',
      '/halo5-tripple.gif'
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
      '/chey-doug-nyc.JPG',
      '/chey-doug-mickey.JPG',
      '/chey-doug-odin-car.JPG',
      '/chey-doug-golf.JPG',
      'underoath.JPG',
      'drew-lynch-show.png'
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
      '/chey-doug-boxing.JPG',
      '/crossfit.JPG',
      '/penguin-gym.JPG',
      '/rangers-game.JPG',
      '/aggies-att-stadium.png'
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
      '/lego-avengers.jpg',
      '/lego-star-wars.jpg',
      '/todo-board.jpg',
      '/white-board.jpg',
      '/table-before.JPG',
      '/table-after.jpg'
    ]
  }
}

export const AboutFunClusters = [
  aboutVideoGames,
  aboutAdventures,
  aboutSports,
  aboutCreativity
]
