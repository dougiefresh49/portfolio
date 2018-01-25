import {AboutMeClusters, AboutFamilyClusters, AboutDogsClusters, AboutFunClusters} from './data/about'

export const state = () => ({
  AboutMeClusters,
  AboutFamilyClusters,
  AboutDogsClusters,
  AboutFunClusters,
  clustersInView: AboutMeClusters
})

export const mutations = {
  updateClustersInView (state, newCluster) {
    state.clustersInView = newCluster || state.AboutMeClusters
  }
}
export const actions = {
}
export const getters = {}
