import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _35260eec = () => import('../src/pages/Workshops.vue' /* webpackChunkName: "pages/Workshops" */).then(m => m.default || m)
const _c7d49fc2 = () => import('../src/pages/People.vue' /* webpackChunkName: "pages/People" */).then(m => m.default || m)
const _26b3086f = () => import('../src/pages/Home.vue' /* webpackChunkName: "pages/Home" */).then(m => m.default || m)
const _0bdf4b0a = () => import('../src/pages/Connect.vue' /* webpackChunkName: "pages/Connect" */).then(m => m.default || m)
const _60bf0ed4 = () => import('../src/pages/Labs.vue' /* webpackChunkName: "pages/Labs" */).then(m => m.default || m)
const _39a0ea8a = () => import('../src/pages/Projects.vue' /* webpackChunkName: "pages/Projects" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Workshops",
			component: _35260eec,
			name: "Workshops"
		},
		{
			path: "/People",
			component: _c7d49fc2,
			name: "People"
		},
		{
			path: "/Home",
			component: _26b3086f,
			name: "Home"
		},
		{
			path: "/Connect",
			component: _0bdf4b0a,
			name: "Connect"
		},
		{
			path: "/Labs",
			component: _60bf0ed4,
			name: "Labs"
		},
		{
			path: "/Projects",
			component: _39a0ea8a,
			name: "Projects"
		}
    ],
    
    
    fallback: false
  })
}
