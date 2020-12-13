import merge from 'deepmerge'
import { mount as mountUtil } from '@vue/test-utils'
import { ComponentOptions, FunctionalComponent } from 'vue'
import {
  routerKey,
  RouterLink,
  RouterView,
  createRouter,
  routeLocationKey,
  RouteLocationRaw,
  createMemoryHistory,
  Router,
} from 'vue-router'

export const withRouter = (path?: RouteLocationRaw, router?: Router) => ({
  global: {
    components: { RouterLink, RouterView },
    provide: {
      [routeLocationKey.valueOf()]: path || {},
      [routerKey.valueOf()]:
        router ||
        createRouter({
          history: createMemoryHistory(),
          routes: [],
        }),
    },
  },
})

export const mix = (...args: object[]) => merge.all(args)

type Component = FunctionalComponent | ComponentOptions
export const mount = (component: Component, opts: object = {}) =>
  mountUtil(component as any, opts)
