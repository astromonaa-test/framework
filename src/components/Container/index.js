import Component from '../Component';
import Template from './index.html'


export class Container extends Component {
  constructor() {
    super('container')
  }

  gethtmlTemplate() {
    return Template
  }
}

