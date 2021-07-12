import { Link } from "react-router-dom";
import "./post.css";

export default function Post3({img})
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
          <Link to="/post/abc4" className="link">
            Niazi express service
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      
    
       Niazi Express provides the national wise luxury Travelling.
         the company has 150 luxury buses over diffrent routes.
         200 Intercity Buses, 50 Stations, 23 Routes. Niazi Express and have gained
          considerable popularity due to their reliability, 
         security and good service Smaller vans and buses are used for transportation

       </p>
  </div>
  )

}