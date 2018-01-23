async function supportsWebp (windowSelf) {
  if (!windowSelf.createImageBitmap) return false

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const blob = await fetch(webpData).then(r => r.blob())
  return windowSelf.createImageBitmap(blob).then(() => true, () => false)
}

function updateClusterImageExtensions (cluster) {
  if (!cluster.imageCards || !cluster.imageCards.images) return cluster

  cluster.imageCards.images = cluster.imageCards.images.map((image) => {
    return (image.slice(-5) === '.webp')
      ? image.slice(0, -5) + '.png'
      : image
  })
  if (cluster.banner && cluster.banner.img) {
    cluster.banner.img = (cluster.banner.img.slice(-5) === '.webp')
      ? cluster.banner.img.slice(0, -5) + '.png'
      : cluster.banner.img
  }

  if (cluster.textCard && cluster.textCard.icons) {
    cluster.textCard.icons = cluster.textCard.icons.map((icon) => {
      icon.img = (icon.img.slice(-5) === '.webp')
        ? icon.img.slice(0, -5) + '.png'
        : icon
      return icon
    })
  }
  return cluster
}

function updateCardImageExtension (card) {
  if (!card.img) return card
  card.img = (card.img.slice(-5) === '.webp')
    ? card.img.slice(0, -5) + '.png'
    : card.img
  return card
}

export {
  updateClusterImageExtensions,
  updateCardImageExtension,
  supportsWebp
}
