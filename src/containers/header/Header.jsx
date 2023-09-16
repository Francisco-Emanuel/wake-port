import './header.css'
import Navbar from '../../components/navbar/Navbar'
import Modelo from '../../assets/modelosmart.png'
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <main id="home">
        <Navbar />
        <div className="smart__main">
            <div className="smart__main-section">
                <h1>
                    Descubra o <b>segredo para desencadear todo o potencial</b> do seu negócio 
                </h1>
                <p>
                    Somos uma agência de marketing focada em criação de sites, social media e design.
                </p>
                <button>
                    conheça o nosso trabalho
                </button>
                <button>
                    solicitar orçamento
                </button>
            </div>
            <div className="smart__main-section_pic">
                <img src={Modelo} alt="modelo" className="header-foto" />
                <div className="smart__main-section_pic-icons">
                    <a href="#"><FaFacebookF size={30} color="#fff" /></a>
                    <a href="#"><FaTiktok size={30} color="#fff" /></a>
                    <a href="#"><FaInstagram size={30} color="#fff" /></a>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Header