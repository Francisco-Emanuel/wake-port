import "./how.css";
import Card from "../../components/card/Card";
import Img from "../../assets/monetizar.svg";

const How = () => {
  return (
    <section className="wake__how">
      <div className="wake__how-title">
        <h1>
          Como <b>pretendemos fazer</b> isso?
        </h1>
        <p>
          Com a nossa estratégia <b>"wake up"</b>. Solicite uma consultoria
          estratégica gratuita para mostrarmos o que precisa ser feito na sua
          empresa.
        </p>
      </div>
      <div className="wake__how-cards">
        <div className="top">
          <div className="grid-item">
            <Card
              img={Img}
              title="Arrumar a casa"
              desc="Otimizar os canais de vendas, alinhado-os com as expectativas do seu público-alvo."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Img}
              title="Tráfego"
              desc="Atrair a atenção do público-alvo. Com anúncios online."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Img}
              title="Engajamento"
              desc="Despertando interesse e construindo confiança do seu público-alvo."
            />
          </div>
        </div>
        <div className="bottom">
          <div className="grid-item">
            <Card
              img={Img}
              title="Venda"
              desc="Converter pessoas do público-alvo em clientes"
            />
          </div>
          <div className="grid-item">
            <Card
              img={Img}
              title="Retenção"
              desc="Manter os clientes comprando"
            />
          </div>
        </div>
      </div>
      <div className="wake__how-btn">
        <a href="#">Quero uma consultoria estratégica</a>
      </div>
    </section>
  );
};

export default How;
