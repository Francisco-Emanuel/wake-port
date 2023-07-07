import WWW from '../../assets/www.png'
import Design from '../../assets/design.png'
import Sm from '../../assets/socialmedia.png'
import Job from '../../components/job/Job'
import './jobs.css'

const jobsData = [
  {
    img: Sm,
    title: "Social Media",
    desc: "Gestão de Midias sociais. São para empresa que querem se modernizar ou profissionalizar a suas redes sociais. Onde vamos ter um planejamento estratégico, posicionamento da marca, publico alvo, criação de conteúdo, criação de artes, análise, relatórios ",
  },
  {
    img: Design,
    title: "Design",
    desc: "Elaboração de identidade visual, flyers, artes. Fortalecemos sua marca com design com base nas estratégias de mercado.",
  },
  {
    img: WWW,
    title: "Desenvolvimento Web",
    desc: "Com design elegante, funcionalidade intuitiva e conteúdo cativante, construímos sites que atraem e convertem visitantes em clientes, estamos aqui para criar uma presença online que impulsione seu sucesso",
  }
]

const Jobs = () => {
  return (
    <section>
      <div className="smart__jobs">
        <div className="smart__jobs-title">
          <div className="smart__jobs-title_h">
            <div/>
            <h1>nossos serviços</h1>
          </div>
          <p>Conheça um pouco do que nós fazemos</p>
        </div>
        <div className="smart__jobs-cards">
          {jobsData.map((item, index)=>(
            <Job title={item.title} desc={item.desc} img={item.img} key={item.title + index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Jobs