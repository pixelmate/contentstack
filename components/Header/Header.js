import Navbar from './Navbar/Navbar'
import Style from './Header.module.scss'

// function Header({ navitems }) {
function Header() {

  return (
    <header className={Style.header}>
      {/* <Navbar navitems={navitems} /> */}
      <Navbar />
    </header>

  )
}

export default Header