import './contact.css'
import Qr from '../../assets/qrcodesmart.jpg'

const Contact = () => {
  return (
    <section>
        <div className="smart__contact">
            <h1>contato</h1>
            <img src={Qr} alt="qrcode" id="smart__contact-qr"/>
        </div>
    </section>
  )
}

export default Contact