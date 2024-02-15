import "./job.css";

const Job = ({ type, img }) => {
  const mystyle = {
    backgroundImage: `url(${img})`
  };

  return (
    <div className="job__container" style={mystyle}>
      <div className="job__container-inner">
        <h1>{type}</h1>
        <p>clique para ver</p>
      </div>
    </div>
  );
};

export default Job;
