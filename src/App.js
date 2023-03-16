import Router from "./Router"

export default class App {
  constructor(args = {}) {
    this.root = args.el
    this.router = new Router()
  }

  update() {
    this.router.update()
    this.root.innerHTML = '';
    this.root.append(this.router.page.fragment)
  }
}