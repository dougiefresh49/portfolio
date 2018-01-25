import { supportsWebp, updateClusterImageExtensions, updateCardImageExtension } from '../shared/image-operations'

export const state = () => ({
  isWebpSupported: true,
  isWebpChecked: false,
  imageExtension: '.webp'
})

export const mutations = {
  setWebpSupport (state, supported) {
    state.isWebpSupported = supported
    state.isWebpChecked = true
    state.imageExtension = (supported) ? '.webp' : '.png'
  },
  updateImageExtensions (state, {key, isWebpSupported, updateImgCardExt, updateNavCardExt}) {
    isWebpSupported = (isWebpSupported === undefined) ? state.isWebpSupported : isWebpSupported
    if (isWebpSupported) return // nothing to do if webp is enabled

    for (let prop in state[key]) {
      if (!state[key].hasOwnProperty(prop) || state[key][prop].constructor !== Array) continue
      state[key][prop] = state[key][prop].map(obj => {
        return (updateNavCardExt)
          ? updateCardImageExtension(obj)
          : updateClusterImageExtensions(obj)
      })
    }
  }
}

export const actions = {
  async LOAD ({commit, state}, {windowSelf, key, updateImgCardExt = true, updateNavCardExt = false, updateIconExt = false}) {
    let isWebpSupported
    if (!state.isWebpChecked) {
      isWebpSupported = await supportsWebp(windowSelf)
      commit('setWebpSupport', isWebpSupported)
    }
    console.log('is webp supported: ', isWebpSupported || state.isWebpSupported)
    // commit('updateImageExtensions', {key, isWebpSupported, updateImgCardExt, updateNavCardExt})
  }
}
