import { useEffect, useState } from "react";

function Weather() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    async function loadWeather() {

      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=4.71&longitude=-74.07&current_weather=true"
      );

      const data = await response.json();

      setWeather(data.current_weather);
    }

    loadWeather();

  }, []);

  return (
    <div>
      <h2>Clima Bogotá</h2>

      {weather && (
        <p>
          Temperatura: {weather.temperature}°C
        </p>
      )}
    </div>
  );
}

export default Weather;