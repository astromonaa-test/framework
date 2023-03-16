export default class Component {
  constructor(type) {
    this.type = type
    this.children = []
  }
  add(children) {
    this.children.push(children)
  }
  render() {
    const divElement = document.createElement('div')
    divElement.innerHTML = this.gethtmlTemplate()
    divElement.firstElementChild.append(...this.children.map(item => item.render()))
    return divElement.firstElementChild
  }
}