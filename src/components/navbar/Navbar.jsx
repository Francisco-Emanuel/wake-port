import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/smartlogo.png'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home">Início</a></p>
    <p><a href="#sobre">Sobre</a></p>
    <p><a href="#servicos">Serviços</a></p>
    <p><a href="#portfolio">Portfólio</a></p>
    <p className="smart__navbar-contact"><a href="http://wa.me/4396051358">contato</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="smart__navbar">
      <div className="smart__navbar-links">
        <div className="smart__navbar-links_logo">
          <img src={Logo} alt="logo" id="logo" />
        </div>
        <div className="smart__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="smart__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="smart__navbar-menu_container scale-up-center">
            <div className="smart__navbar-menu_container-links">
            <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar