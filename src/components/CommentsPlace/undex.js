import Component from '../Component';
import Template from './index.html'
import { Comment } from '../Comment';


export class CommentsPlace extends Component {
  constructor(originalArgs=[]) {
    super('commentsPlace')
    this.args = {
      comments: [...originalArgs.map(comment => new Comment(comment))],
    }
  }

  gethtmlTemplate() {
    const fragment = document.createElement('div')
    fragment.innerHTML = Template;
    fragment.firstElementChild.append(...this.args.comments.map(comment => comment.render()))
    return fragment.outerHTML
  }
}

