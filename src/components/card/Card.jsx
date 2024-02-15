import './card.css'

const Card = ({img, title, desc}) => {
  return (
    <div className="card__container">
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Card