import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost2() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1421977870504-378093748ae6?ixid=MnwyMzg4Mzl8MHwxfHNlYXJjaHwxMHx8YnVzfGVufDB8fHx8MTYyMzQyOTMxOQ&ixlib=rb-1.2.1"
          alt=""
        />
        <h1 className="singlePostTitle">
          Faisal Mover's
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/blog">
                Back
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Just chekmng
          <br />
          <br />
          
        </p>
      </div>
    </div>
  );
}
