import "./header.css"
import MyImage from "../../assets/lungelom.jpeg"

const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo">
        <h2>Tracksphere</h2>
      </div>
      <div className="profile-img">
        <img src={MyImage} alt="" />
      </div>
    </nav>
  )
}

export default Header