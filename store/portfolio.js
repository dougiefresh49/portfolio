import {FidelityProjectClusters, FreelanceProjectClusters} from './data/portfolio'

export const state = () => ({
  fidelity: FidelityProjectClusters,
  freelance: FreelanceProjectClusters,
  clustersInView: {}
})

export const mutations = {
  updateClustersInView (state, newCluster) {
    state.clustersInView = newCluster || state.fidelity
  }
}

export const actions = {
}
export const getters = {}
