import Job from "../../components/job/Job";
import "./jobs.css";

const Jobs = () => {
  return (
    <section className="wake__jobs">
      <h1>O que a <b>Wake</b> ja fez</h1>
      <p>Conheça os nossos trabalhos anteriores</p>
      <div className="wake__jobs-cards">
        <Job type="identidade visual" img="/src/assets/capapizza.png" />
        <Job type="website" img="/src/assets/capasite2.png" />
        <Job type="identidade visual" img="/src/assets/capahamburguer.png" />
        <Job type="website" img="/src/assets/capasite1.png" />
        <Job type="social media" img="/src/assets/port-socialmedia.png" />
        <Job type="identidade visual" img="/src/assets/capaffy.png" />
      </div>
    </section>
  );
};

export default Jobs;
