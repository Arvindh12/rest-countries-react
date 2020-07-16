import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import { Pagination } from "@material-ui/lab";

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

  const [paginationData, setPaginationData] = useState({count: 1 , current: 1});

  useEffect(() => {
    var data = countries
      .filter(
        (data) =>
          data.population >= filteredPopulation[0] &&
          data.population <= filteredPopulation[1]
      )
      .filter((data) => checkLanguage(data.languages))
      .filter((data) => checkCurrency(data.currencies));
    console.log(data.length);
    setPaginationData({count : data.length , current : paginationData.current });
  }, [filteredCurrencies, filteredLanguages, filteredPopulation, countries]);

  return (
    <> <div className="row">
      <Pagination
      size="large"
      className="mx-auto"
        count={paginationData.count === 0 ? 1 : Math.ceil(paginationData.count / 10)}
        shape="rounded"
        onChange={(e, p) => {
          console.log(e, p);
          setPaginationData({count : paginationData.count , current : p });
        }}
      />

</div>
      <div className="row">
        {countries
          .filter(
            (data) =>
              data.population >= filteredPopulation[0] &&
              data.population <= filteredPopulation[1]
          )
          .filter((data) => checkLanguage(data.languages))
          .filter((data) => checkCurrency(data.currencies))
          .filter((data, index) => {
            if (
             ( index >= (paginationData.current - 1) * 10 ) &&
             ( index < paginationData.current * 10 )
            ){ console.log("true" , paginationData.current)
              return true; }
          else{console.log("false" ,paginationData.current)
            return false;}
          })
          .map((e) => (
            <CountryCard countries={e} />
          ))}
      </div>
    </>
  );
}

export default ContentDisplay;
