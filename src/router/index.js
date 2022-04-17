import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/products',
		name: 'Products',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
	},
	{
		path: '/products/:id',
		name: 'Product',
		component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
	},
	{
		path: '/categories',
		name: 'Categories',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
	},
	{
		path: '/login',
		name: 'LogIn',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue'),
		meta: {
			hideForAuth: true
		}
	},
	{
		path: '/signup',
		name: 'SignUp',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
		meta: {
			hideForAuth: true
		}
	},
	{
		path: '/me',
		name: 'Me',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/me/settings',
		name: 'Settings',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/UserSettings.vue'),
		meta: {
			requiresAuth: true
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// Requires auth, check if logged in

		if (!localStorage.getItem("accessToken")) {
			// If not, redirect to login page.
			next({name: 'LogIn'})
		} else {
			next() // go to wherever I'm going
		}

	} else if (to.matched.some(record => record.meta.hideForAuth)) {

		if (localStorage.getItem("accessToken")) {
			next({name: 'Me'})
		} else {
			next()
		}

	} else {
		next() // Does not require auth.
	}
})

export default router
