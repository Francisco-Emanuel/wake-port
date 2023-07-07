import './job.css'

const Job = ({ img, title, desc }) => {
  return (
    <div className="smart__jobs-card">
      <div className="smart__jobs-card-img">
        <img src={img} alt="stg"/>
      </div>
      <div className="smart__jobs-card-title">
        <h1>{title}</h1>
      </div>
      <div className="smart__jobs-card-desc">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Job