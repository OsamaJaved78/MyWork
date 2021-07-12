import { Link } from "react-router-dom";
import "./post.css";

export default function Post4({img})
 {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}  
        // "/assets/images/faisalmovers.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              bus
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
            service
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc5" className="link">
            kohistan bus service
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Today it is transforming it's meaning as Kohistan Express which 
      would mean convenience, technology & total customer satisfaction.
       Kohistan operates a large fleet of luxry buses on key 
      national routes & plans to expand its network all accross Pakistan
       </p>
  </div>
  )

}