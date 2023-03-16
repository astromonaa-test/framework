import App from "./App";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Post } from "./components/Post";
import fakeData from "../fakeData";
import { CommentsPlace } from "./components/CommentsPlace/undex";

const app = new App({
  el: document.getElementById('app')
})
const header = new Header()
const container = new Container()

for (const item of fakeData) {
  const post = new Post(item)
  const comments = new CommentsPlace(item.comments)
  post.add(comments)
  container.add(post)
}
app.router.add('/', [header, container])

app.update()

console.log(app);