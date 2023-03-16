import Component from '../Component';
import Template from './index.html'


export class Post extends Component {
  constructor(originalArgs = []) {
    super('post')
    this.args = {
      user: {
        name: 'NotName',
        surname: 'NotSurname'
      },
      content: '',
      comments: [],
      ...originalArgs
    }

  }

  gethtmlTemplate() {
    return Template
      .replace(/{{user.name}}/g, this.args.user.name)
      .replace(/{{user.surname}}/g, this.args.user.surname)
      .replace(/{{content}}/g, this.args.content)
  }
}

