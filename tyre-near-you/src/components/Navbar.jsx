import logo from '../assets/Logo.jpg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="TyreNearYou" />
        <span>TyreNearYou</span>
      </div>

      <div className="nav-links">
        <a href="#how">How it works</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
