switch (process.env.NODE_ENV) {
  case 'development':
    require('./development.tokens')
    break
  default:
    break
}

const assetUrl = process.env.ASSET_URL
const photosUrl = process.env.ASSET_URL + '/photos'

export {
  assetUrl,
  photosUrl
}
