import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
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
              Transport
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Bus
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Faisal Mover's
          </Link>
        </span>
        <hr />
        <span className="postDate">5 hour ago</span>
      </div>
      <p className="postDesc">
      The National Highways and Motorway Police (NHMP) has suspended 
      ‘Faisal Movers Bus Service’ on Motorway M-2 with immediate 
      effect due after two recent accidents which occurred as a 
      result of negligence of the company’s owner and resulted it loss 
      of human lives.
      </p>
    </div>
  );
}
