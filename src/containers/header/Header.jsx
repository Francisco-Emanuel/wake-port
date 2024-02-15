import './header.css'
import Navbar from '../../components/navbar/Navbar'
import People from '../../assets/ftprincipal.png'

const Header = () => {
  return (
    <main id="main">
        <Navbar />
        <div className="wake__header">
          <div className="wake__header-mainTxt">
            <h1>
              Desperte todo potencial de <b>venda</b> do seu negócio com a internet.
            </h1>
            <p>
              Somos a Wake, uma assessoria de Marketing focada em fazer sua empresa vender mais.
            </p>
            <a href="#" className="wake__header-mainTxt_fa">
              Quero mais informação
            </a>
            <a href="#" className="wake__header-mainTxt_la">
              Antes quero conhecer a Wake!
            </a>
          </div>
          <div className="wake__header-mainImg">
            <img src={People} alt="pessoas lindas do inicio" />
          </div>
        </div>
    </main>
  )
}

export default Header