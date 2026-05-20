import { useEffect, useState } from "react";

function Countries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    async function loadCountries() {

      try {

        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,cca3"
        );

        const data = await response.json();

        setCountries(data.slice(0, 10));

      } catch (error) {

        console.log(error);

      }

    }

    loadCountries();

  }, []);

  return (

    <div>

      <h2>Países</h2>

      {countries.length === 0 ? (
        <p>Cargando países...</p>
      ) : (

        countries.map((country) => (

          <div
            key={country.cca3}
            style={{
              background: "white",
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "10px"
            }}
          >

            <img
              src={country.flags.png}
              alt={country.name.common}
              width="80"
            />

            <h3>{country.name.common}</h3>

          </div>

        ))

      )}

    </div>

  );

}

export default Countries;