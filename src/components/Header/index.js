import Component from '../Component';
import Template from './index.html'


export class Header extends Component {
  constructor() {
    super('header')
  }

  gethtmlTemplate() {
    return Template
  }
}

