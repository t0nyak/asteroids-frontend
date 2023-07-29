class Asteroid {
  id: string;
  name: string;
  magnitude: number;
  hazardous: boolean;

  constructor({
    id,
    name,
    magnitude,
    hazardous,
  }: {
    id: string;
    name: string;
    magnitude: number;
    hazardous: boolean;
  }) {
    this.id = id;
    this.name = name;
    this.magnitude = magnitude;
    this.hazardous = hazardous;
  }
}

export default Asteroid;
