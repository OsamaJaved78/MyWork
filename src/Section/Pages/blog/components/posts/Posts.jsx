import Post from "../post/Post";
import Post1 from "../post/Post1";
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"

import "./posts.css";


export default function Posts() {
  return (
    <div className="posts">
      <Post img="assets/images/post.jpg"/>
      <Post1 img="/assets/images/post1.jpg" />
      <Post2 img="assets/images/post2.jpg"/>
      <Post3 img="assets/images/post3.jpg"/>
      <Post4 img="assets/images/post4.jpg"/>
    </div>
  );
}
