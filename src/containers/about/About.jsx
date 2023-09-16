import './about.css'
import Cel from '../../assets/mockup-cell.png'

const About = () => {
  return (
    <section id="sobre">
        <div className="smart__about">
            <div className="smart__about-pic">
              <img src={Cel} alt="cel" />
            </div>
            <div className="smart__about-content">
              <div className="smart__about-content_title">
                <div />
                <h1>sobre</h1>
              </div>
              <p>Agência especializada em <b>Gestão de Mídia Sociais, Design e Criação de WebSite.</b> Potencialize sua marca e conquiste uma conexão poderosa com seus clientes através da internet.</p>
            </div>
        </div>
    </section>
  )
}

export default About