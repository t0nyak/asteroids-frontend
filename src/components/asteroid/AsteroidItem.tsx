import Asteroid from "../../models/Asteroid";
import starImg from "../../assets/imgs/star.png";
import warningImg from "../../assets/imgs/warning.png";
import "./AsteroidItem.css";
import { calculateMagnitude } from "../utils/asteroid";

function AsteroidItem({
  asteroid,
  onClick,
}: {
  asteroid: Asteroid;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}): JSX.Element {
  const numberOfStars = calculateMagnitude(asteroid.magnitude);

  return (
    <div className="box" onClick={onClick}>
      <div className="asteroidInfo">
        <p className="asteroidName">{asteroid.name}</p>
        <div className="magnitude">
          <span className="asteroidId">ID: #{asteroid.id}</span>
          <div className="stars">
            {[...Array(numberOfStars)].map((elem, i) => (
              <img src={starImg} alt="star" key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="asteroidProperties">
        <div className="hazardous">
          {asteroid.hazardous ? <img src={warningImg} alt="warning" /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default AsteroidItem;
