import { Link } from "react-router-dom";
import "./post.css";

export default function Post1({img})
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
          <Link to="/post/abc2" className="link">
            bilal bus service
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Find bus timetable and buy your bus ticket online, long-distance 
      and international buses, travelling with bus is easy, cheap, fast and comfortable
      .Our determination to succeed and our dedication to serve again proved to be our
       asset and with ever increasing customer base we our serving
       to seven different destinations 
       and plan to extend to more in recent future.
       </p>
  </div>
  )

}