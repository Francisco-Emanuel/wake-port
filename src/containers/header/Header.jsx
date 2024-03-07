import './header.css'
import Navbar from '../../components/navbar/Navbar'
import People from '../../assets/ftprincipal.png'

document.addEventListener('DOMContentLoaded', function () {
      // Seleciona todos os links que têm a classe "external-link"
      var links = document.querySelectorAll('#external-link');

      // Adiciona um ouvinte de evento a cada link
      links.forEach(function (link) {
        link.addEventListener('click', function (event) {
          // Impede o comportamento padrão de clique no link
          event.preventDefault();

          // Abre o link em uma nova guia usando window.open
          window.open(link.href, '_blank');
        });
      });
    });

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
            <a href="https://wa.me/+554396051358" id="external-link" className="wake__header-mainTxt_fa">
              Quero mais informação
            </a>
            <a href="#slide" className="wake__header-mainTxt_la">
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
