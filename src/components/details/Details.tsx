import Asteroid from "../../models/Asteroid";
import warningImg from "../../assets/imgs/warning.png";
import starImg from "../../assets/imgs/star.png";
import "./Details.css";
import { calculateMagnitude } from "../utils/asteroid";

function Details({
  asteroid,
  onBack,
}: {
  asteroid: Asteroid;
  onBack: React.MouseEventHandler<HTMLDivElement>;
}): JSX.Element {
  const numberOfStars = calculateMagnitude(asteroid.magnitude);

  return (
    <div className="detailBox">
      <span onClick={onBack}>X</span>
      <div className="detailInfo">
        <h3>{asteroid.name}</h3>
        <span>ID: #{asteroid.id}</span>
        <div className="detailMagnitude">
          <span className="asteroidId">Magnitud del asteroide: </span>
          <div className="stars">
            {[...Array(numberOfStars)].map((elem, i) => (
              <img src={starImg} alt="star" key={i} />
            ))}
          </div>
        </div>
      </div>
      {asteroid.hazardous ? (
        <div className="detailHazard">
          <img src={warningImg} alt="Hazardous" />
          <span>Este asteroide es peligroso</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Details;
