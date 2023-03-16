import Component from '../Component';
import Template from './index.html'


export class Comment extends Component {
  constructor(originalsArgs = []) {
    super('comment')
    this.args = {
      comment: {...originalsArgs},
    }
  }

  gethtmlTemplate() {
    console.log(this.args);
    return Template
      .replace(/{{comment.user}}/g, `<div>${this.args.comment.user}</div>`)
      .replace(/{{comment.content}}/g, ` <span>${this.args.comment.content}</span>`)
  }
}

