import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://randomwordgenerator.com/img/picture-generator/54e1d64b4354ae14f1dc8460962e33791c3ad6e04e5074417c2f7dd4914ac7_640.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Sports</li>
        </ul>
    
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    
    </div>
    
  )
}
