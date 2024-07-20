import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [location, setLocation] = useState("Baku");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response =
          await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=4&aqi=yes&alerts=yes
`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (location) {
      fetchData();
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <h2 className="header">Weather Forecast</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Enter location..."
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="response-container">
            <div className="region">
              <p>
                {data?.location?.region}, {data?.location?.country}
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <WeatherCard data={data} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
