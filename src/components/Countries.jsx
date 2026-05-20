import { useEffect, useState } from "react";

function Countries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    async function loadCountries() {

      const response = await fetch(
        "https://restcountries.com/v3.1/all"
      );

      const data = await response.json();

      setCountries(data.slice(0, 10));
    }

    loadCountries();

  }, []);

  return (
    <div>
      <h2>Países</h2>

      {countries.map((country) => (
        <p key={country.cca3}>
          {country.name.common}
        </p>
      ))}
    </div>
  );
}

export default Countries;