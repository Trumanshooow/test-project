/**
 * ⚠ These are used just to render the sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: string, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive (pathname: string, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/users', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Users', // name that appear in sidebar
  },
  {
    path: '/posts',
    icon: 'FormsIcon',
    name: 'Posts',
  },
]

export type {IRoute}
export default routes
