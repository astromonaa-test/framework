import Component from '../components/Component'
import Template from './index.html'

export default class notFound extends Component {
  constructor() {
    super('404')
  }
  gethtmlTemplate() {
    return Template
  }
}