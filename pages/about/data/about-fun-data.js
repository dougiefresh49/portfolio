const aboutVideoGames = {
  textCard: {
    type: 'banner',
    title: 'Gaming',
    desc: 'Bro! Get your controller and lets go!',
    icons: [
      {img: '/about/gaming/icons/stormtrooper-helmet.jpg'},
      {img: '/about/gaming/icons/master-chief-helmet.jpg', href: 'https://nodejs.org/'},
      {img: '/about/gaming/icons/titanfall-2-helmet.png', href: 'http://parseplatform.org/'},
      {img: '/about/gaming/icons/psycho.jpeg', href: 'https://gulpjs.com/'},
      {img: '/about/gaming/icons/injustice-2-batman-head.png', href: 'https://gulpjs.com/'},
      {img: '/about/gaming/icons/castle-crashers-head.png', href: 'https://gulpjs.com/'}
    ],
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      '/about/star-wars-controller.jpg',
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
      '/about/chey-doug-nyc.JPG',
      '/about/adventures/chey-doug-mickey.JPG',
      '/about/adventures/chey-doug-odin-car.JPG',
      '/about/adventures/chey-doug-golf.JPG',
      '/about/adventures/underoath.JPG',
      '/about/adventures/drew-lynch-show.png'
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
      '/about/sports/chey-doug-boxing.JPG',
      '/about/sports/crossfit.JPG',
      '/about/sports/penguin-gym.JPG',
      '/about/sports/rangers-game.JPG',
      '/about/sports/aggies-att-stadium.png'
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
      '/shared/lego-avengers.jpg',
      '/about/creativity/lego-star-wars.jpg',
      '/about/creativity/todo-board.jpg',
      '/about/creativity/white-board.jpg',
      '/about/creativity/table-before.JPG',
      '/about/creativity/table-after.jpg'
    ]
  }
}

export const AboutFunClusters = [
  aboutVideoGames,
  aboutAdventures,
  aboutSports,
  aboutCreativity
]
