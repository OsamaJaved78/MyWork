import { Link } from "react-router-dom";
import "./post.css";

export default function Post2({img})
 {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}  
        
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc3" className="link">
            Daewoo bus service
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Daewoo Express has been rendering transport facilities 
      since its inception in 1997 to the people of Pakistan.
      Daewoo Express is the first and the biggest foreign investment 
      Company with an advanced
    and organized transport system in Pakistan
      


       </p>
  </div>
  )

}