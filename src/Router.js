import notFound from "./404/404";
import Page from "./Page";

export default class Router {
  constructor() {
    this.routes = [];
    this.route = null
    this.page = null
  }

  add(path, container) {
    this.routes.push({path, container})
  }

  update() {
    for (const route of this.routes) {
      if (route.path === location.pathname) {
        this.route = route
        this.page = new Page(route.container)
        return 
      }
    }
    this.page = new Page([new notFound()])
  }
}