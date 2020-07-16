import React from "react";
import CountryCard from "./CountryCard";

function ContentDisplay({
  countries,
  filteredPopulation,
  filteredLanguages,
  filteredCurrencies,
}) {
  console.log(filteredCurrencies);

  const checkLanguage = (data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < filteredLanguages.length; j++) {
        if (data[i].name === filteredLanguages[j][0]) {
          if (filteredLanguages[j][1]) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkCurrency = (data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < filteredCurrencies.length; j++) {
        if (data[i].name === filteredCurrencies[j][0]) {
          if (filteredCurrencies[j][1]) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <>
      {countries
        .filter(
          (data) =>
            data.population >= filteredPopulation[0] &&
            data.population <= filteredPopulation[1]
        )
        .filter((data) => checkLanguage(data.languages))
        .filter((data) => checkCurrency(data.currencies))
        .map((e) => (
          <CountryCard countries={e} />
        ))}
    </>
  );
}

export default ContentDisplay;
