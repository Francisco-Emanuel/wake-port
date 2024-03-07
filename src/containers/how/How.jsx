import "./how.css";
import Card from "../../components/card/Card";
import Venda from "../../assets/monetizar.svg";
import Engajamento from '../../assets/engajamento.svg'
import Retencao from '../../assets/retencao.svg'
import Aac from '../../assets/arrumaracasa.svg'
import Ts from '../../assets/trafego-servico.svg'

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
              img={Aac}
              title="Arrumar a casa"
              desc="Otimizar os canais de vendas, alinhado-os com as expectativas do seu público-alvo."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Ts}
              title="Tráfego"
              desc="Atrair a atenção do público-alvo. Com anúncios online."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Engajamento}
              title="Engajamento"
              desc="Despertando interesse e construindo confiança do seu público-alvo."
            />
          </div>
        </div>
        <div className="bottom">
          <div className="grid-item">
            <Card
              img={Venda}
              title="Venda"
              desc="Converter pessoas do público-alvo em clientes"
            />
          </div>
          <div className="grid-item">
            <Card
              img={Retencao}
              title="Retenção"
              desc="Manter os clientes comprando"
            />
          </div>
        </div>
        <div className="normal-grid">
          <div className="grid-item">
            <Card
              img={Aac}
              title="Arrumar a casa"
              desc="Otimizar os canais de vendas, alinhado-os com as expectativas do seu público-alvo."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Ts}
              title="Tráfego"
              desc="Atrair a atenção do público-alvo. Com anúncios online."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Engajamento}
              title="Engajamento"
              desc="Despertando interesse e construindo confiança do seu público-alvo."
            />
          </div>
          <div className="grid-item">
            <Card
              img={Venda}
              title="Venda"
              desc="Converter pessoas do público-alvo em clientes"
            />
          </div>
          <div className="grid-item">
            <Card
              img={Retencao}
              title="Retenção"
              desc="Manter os clientes comprando"
            />
          </div>
        </div>
      </div>
      <div className="wake__how-btn">
        <a href="https://wa.me/+554396051358" id="external-link">Quero uma consultoria estratégica</a>
      </div>
    </section>
  );
};

export default How;
