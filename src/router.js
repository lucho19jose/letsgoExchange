import Vue from "vue"
import Router from "vue-router"

import Home from "@/views/Home"
import About from "@/views/About"
import Error from "@/views/Error"
import AboutDev from "@/views/AboutDev"
import CoinDetail from "@/views/CoinDetail"

Vue.use(Router)

export default new Router({
  mode: "history",

  routes:[
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: '/coin/:id',/* url dinamica */
      name: 'coin-detail',
      component: CoinDetail
    },
    {
      path: '/aboutdev',
      name: 'aboutdev',
      component: AboutDev
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
})
