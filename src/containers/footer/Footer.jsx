import "./footer.css";
import Logo from "../../assets/logo-wake-copy.svg";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="wake__footer">
      <div className="wake__footer-container">
        <div className="wake__footer-sub_container">
          <img src={Logo} alt="logo" id="footer-logo" />
          <p style={{ marginBottom: "4rem" }}>
            Despertar, transormar e conquistar
          </p>
          <h1 style={{
            marginBottom: "10px",
          }}>Siga-nos</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTiktok size={24} />
            <FaLinkedinIn size={24} />
          </div>
        </div>
        <div className="wake__footer-sub_container" id="whatsapp-footer">
          <a
            href="https://wa.me/+5543984522151"
            style={{
              display: "flex",
              color: "#0cb53c",
              fontSize: "18px",
              textDecoration: "underline",
            }}
          >
            <FaWhatsapp color="#0cb53c" size={24} />
            Whatsapp da Wake
          </a>
        </div>
        <div
          className="wake__footer-sub_container"
          style={{ textAlign: "start" }}
          id="footer-links"
        >
          <a href="https://wa.me/+5543984522151" id="whatsapp-footer_second">
            <FaWhatsapp color="#0cb53c" size={24} />
            Whatsapp da Wake
          </a>
          <a href="#">Home</a>
          <a href="#">Estratégias</a>
          <a href="#">Serviços</a>
          <a href="#">Portfólio</a>
          <button>Contato</button>
        </div>
      </div>
      <p style={{
        color: "#808080",
      }}>2024©Wake Company. todos os direitos reservados</p>
    </section>
  );
};

export default Footer;
