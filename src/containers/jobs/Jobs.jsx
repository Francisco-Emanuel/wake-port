import Job from "../../components/job/Job";
import Pizza from '../../assets/capapizza.png'
import Site from '../../assets/capasite2.png'
import Ham from '../../assets/capahamburguer.png'
import SiteD from '../../assets/capasite1.png'
import Soc from '../../assets/port-socialmedia.png'
import Ffy from '../../assets/capaffy.png'
import "./jobs.css";

const Jobs = () => {
  return (
    <section className="wake__jobs">
      <h1>O que a <b>Wake</b> ja fez</h1>
      <p>Conheça os nossos trabalhos anteriores</p>
      <div className="wake__jobs-cards">
        <Job type="identidade visual" img={Pizza} />
        <Job type="website" img={Site} />
        <Job type="identidade visual" img={Ham} />
        <Job type="website" img={SiteD} />
        <Job type="social media" img={Soc} />
        <Job type="identidade visual" img={Ffy} />
      </div>
    </section>
  );
};

export default Jobs;
