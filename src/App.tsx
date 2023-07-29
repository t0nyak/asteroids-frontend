import { useState } from "react";
import "./App.css";
import Asteroid from "./models/Asteroid";
import List from "./screens/List";
import DateInput from "./components/date-inputs/DateInput";
import DateButton from "./components/date-button/DateButton";
import ApiService from "./services/apiService";

function App(): JSX.Element {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = () => {
    setIsLoading(true);
    ApiService.getAsteroids(startDate, endDate).then((res) => {
      setAsteroids(res);
      setIsLoading(false);
    });
  };

  return (
    <div className="content">
      <h1>Asteroids App</h1>

      <div className="form">
        <DateInput
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Fecha inicio"
        />
        <DateInput
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="Fecha fin"
        />
        <DateButton onClick={onSubmit} />
      </div>
      {isLoading ? <p>Loading...</p> : <List asteroids={asteroids} />}
    </div>
  );
}

export default App;
