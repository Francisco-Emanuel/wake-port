import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/smartlogo.png'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home">Início</a></p>
    <p><a href="#wgpt3">Sobre</a></p>
    <p><a href="#possibility">Serviços</a></p>
    <p><a href="features">Portfólio</a></p>
    <p className="gpt3__navbar-contact"><a href="#blog">contato</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="logo" id="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
            <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar