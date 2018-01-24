import {photosUrl} from '../../../config'

const aboutMarriedLife = {
  banner: {
    img: photosUrl + '/about/family/chey-doug-flowers2.png'
  },
  textCard: {
    type: 'banner',
    title: 'Married Life',
    desc: 'I love her. She makes me smile when I cannot',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/chey-doug-nyc.png',
      photosUrl + '/about/chey-doug-ride.png',
      photosUrl + '/about/family/chey-doug-booth.png'
    ]
  }
}

const aboutDadLife = {
  banner: {
    img: photosUrl + '/about/family/emma-wubbanub.png'
  },
  textCard: {
    type: 'banner',
    title: 'Dad Life',
    desc: 'Who knew something so little could bring about so much love',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/family/emma-burrito.png',
      photosUrl + '/about/family/doug-emma-gaming.png',
      photosUrl + '/about/family/chey-doug-emma-nana.png'
    ]
  }
}

const aboutFamilyLife = {
  banner: {
    img: photosUrl + '/about/family/family-xmas-tree.png'
  },
  textCard: {
    type: 'banner',
    title: 'Family Life',
    desc: '',
    height: 'auto'
  },
  imageCards: {
    type: 'stack',
    images: [
      photosUrl + '/about/family/family-thanksgiving.png',
      photosUrl + '/about/family/chey-family.png',
      photosUrl + '/about/family/carrie-nick-lila.png',
      photosUrl + '/about/family/chey-julie.png',
      photosUrl + '/about/family/family-dinner.png',
      photosUrl + '/about/family/family-matching-shirts.png'
    ]
  }
}

export const AboutFamilyClusters = [
  aboutMarriedLife,
  aboutDadLife,
  aboutFamilyLife
]
