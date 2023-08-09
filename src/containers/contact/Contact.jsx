import './contact.css'
import Qr from '../../assets/qrcodesmart.jpg'

const Contact = () => {
  return (
    <section>
        <div className="smart__contact">
            <h1>contato</h1>
            <h3>clique ou escaneie o qrcode abaixo</h3>
            <a href="http://wa.me/4396051358"><img src={Qr} alt="qrcode" id="smart__contact-qr"/></a>
        </div>
    </section>
  )
}

export default Contact