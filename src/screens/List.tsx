import { useState } from "react";
import AsteroidItem from "../components/asteroid/AsteroidItem";
import Asteroid from "../models/Asteroid";
import Details from "../components/details/Details";

function List({ asteroids }: { asteroids: Asteroid[] }): JSX.Element {
  const [selectedAsteroid, setSelectedAsteroid] = useState<
    Asteroid | undefined
  >(undefined);

  return (
    <div>
      {!selectedAsteroid ? (
        asteroids.map((asteroid, i) => {
          return (
            <AsteroidItem
              onClick={() => setSelectedAsteroid(asteroid)}
              asteroid={asteroid}
              key={i}
            />
          );
        })
      ) : (
        <Details
          onBack={() => setSelectedAsteroid(undefined)}
          asteroid={selectedAsteroid}
        />
      )}
    </div>
  );
}

export default List;
