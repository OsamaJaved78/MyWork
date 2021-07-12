import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">  
        <span className="headerTitleLg" > Our Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?ixid=MnwyMzg4Mzl8MHwxfHNlYXJjaHw2fHxidXN8ZW58MHx8fHwxNjIzNDI5MzE5&ixlib=rb-1.2.1"
        alt=""
      />
    </div>
  );
}
