export default function ({ app, store, error, redirect, req, route }) {
  store.commit('SET_ROUTE',route.fullPath)
}
