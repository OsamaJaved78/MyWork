import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Blog Page</span>
        <img
          src="https://images.unsplash.com/photo-1520105072000-f44fc083e508?ixid=MnwyMzg4Mzl8MHwxfHNlYXJjaHwyfHxidXN8ZW58MHx8fHwxNjIzNDI5MzE5&ixlib=rb-1.2.1"
          alt=""
          style={{width:"100%"}}
        />
        <p>
          Weclome To Our Blog Page.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Offer's
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Transport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Vacation
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
            Transport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
            Vacation
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa fa-facebook-square"></i>
          <i className="sidebarIcon fa fa-pinterest-square"></i>
          <i className="sidebarIcon fa fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
