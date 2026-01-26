import logo from '../assets/Logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="TyreNearYou logo" />
      </div>

      {/* CENTER */}
      <div className="nav-center">
        Tyre<span>NearYou</span>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <a href="#how">How it works</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar

