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
		component: () => import('../views/Products.vue')
	},
	{
		path: '/products/:id',
		name: 'Product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart.vue')
	},
	{
		path: '/categories',
		name: 'Categories',
		component: () => import('../views/Categories.vue')
	},
	{
		path: '/login',
		name: 'LogIn',
		component: () => import('../views/LogIn.vue'),
		meta: {
			hideForAuth: true
		}
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: () => import('../views/SignUp.vue'),
		meta: {
			hideForAuth: true
		}
	},
	{
		path: '/me',
		name: 'Me',
		component: () => import('../views/Me.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/me/settings',
		name: 'Settings',
		component: () => import('../views/UserSettings.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/me/favorites',
		name: 'Favorites',
		component: () => import('../views/Favorites.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/checkout',
		name: 'Checkout',
		component: () => import( '../views/Checkout.vue')
	},
	{
		/* NOT FOUND. This object has to be the last one. */
		path: '/:pathMatch(.*)*',
		name: "NotFound",
		component: () => import('../views/NotFound.vue')
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
