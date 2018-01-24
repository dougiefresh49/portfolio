import {photosUrl} from '../../../config'

const aboutOdin = {
  textCard: {
    type: 'banner',
    title: 'Odin',
    desc: 'Big Bark. Small Dog. Pals for Life',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/dogs/odin-couch.png',
      photosUrl + '/about/dogs/odin-doug-chey.png',
      photosUrl + '/about/dogs/odin-cabinet.png',
      photosUrl + '/about/dogs/odin-my-bed.png',
      photosUrl + '/about/dogs/odin-onesie.png',
      photosUrl + '/about/dogs/odin-doug-napping.png',
      photosUrl + '/about/dogs/odin-doug-sleep.png'
    ]
  }
}
const aboutJack = {
  textCard: {
    type: 'banner',
    title: 'Jack',
    desc: '"I like to Cuddle. You will love me."',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/dogs/jack-terror.png',
      photosUrl + '/about/dogs/jack-troopers.png',
      photosUrl + '/about/dogs/jack-closeup.png',
      photosUrl + '/about/dogs/jack-papa.png',
      photosUrl + '/about/dogs/jack-eat-yo-face.png',
      photosUrl + '/about/dogs/jack-emma.png'
    ]
  }
}
const aboutLoki = {
  textCard: {
    type: 'banner',
    title: 'Loki',
    desc: '"My name is Loki, and I like to party."',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/dogs/loki-covers.png',
      photosUrl + '/about/dogs/loki-sleep.png',
      photosUrl + '/about/dogs/loki-squirrel.png',
      photosUrl + '/about/dogs/loki-ball.png',
      photosUrl + '/about/dogs/loki-odin-sleep.png'
    ]
  }
}

export const AboutDogsClusters = [
  aboutOdin,
  aboutJack,
  aboutLoki
]
