import React, { useState, useEffect } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const Slider = ({ population, setFilteredPopulation }) => {
 console.log(population)
 let range  = { min: parseInt(population[0]) , max: parseInt(population[1]) };
    
   return (
    <Nouislider
      range={range}
      start={[parseInt(population[0]),parseInt(population[1])]}
      connect
      onChange={(e) => {
        setFilteredPopulation([+e[0] , +e[1] ])
      }}
    />
  );
};

function Filter({ countries , filteredLanguages,setFilteredLanguages,filteredCurrencies,setFilteredCurrencies,filteredPopulation,setFilteredPopulation}) {
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [population, setPopulation] = useState([0,1]);

  

  useEffect(() => {
    let temp = [];

    countries.forEach((data) => {
      data.languages.forEach((data1) => {
        temp.push(data1.name);
      });
    });

    temp = [...new Set(temp)];

    setFilteredLanguages(temp.map((e) => [e,true]));
    setLanguages(temp);
    console.log(filteredLanguages);

    temp = [];

    countries.forEach((data) => {
      data.currencies.forEach((data1) => {
        temp.push(data1.name);
      });
    });

    setFilteredCurrencies(temp.map((e) => [e,true]));

    setCurrencies([...new Set(temp)]);

    temp = [Infinity, -Infinity];

    countries.forEach((data) => {
      if (data.population < temp[0]) {
        temp[0] = data.population;
      }
      if (data.population > temp[1]) {
        temp[1] = data.population;
      }
    });
    if (countries.length > 0){ 
        console.log(temp)
        setFilteredPopulation(temp)
        setPopulation(temp);}


  }, [countries]);

  const handleLanguageChange = (index,name) => {
    //console.log(name)
   setFilteredLanguages(
      filteredLanguages.map((e, i) => {
        if (i === index) return [e[0] , !e[1] ];
        return  [e[0] , e[1] ];
      })
    )
    console.log(filteredLanguages);
  };
  const handleCurrenciesChange = (index) => {
    setFilteredCurrencies(
      filteredCurrencies.map((e, i) => {
        if (i === index) return [e[0] , !e[1] ];
        return  [e[0] , e[1] ];
      })
    );
  };
if(countries.length > 0)
  return (
    <div>
      <h4 className="my-2">Population </h4>
    
      <Slider setFilteredPopulation={setFilteredPopulation} population={population}></Slider>
      <div className="text-center">
        {filteredPopulation[0]}  -  {filteredPopulation[1]}
      </div>
      
      <h4 className="my-2 ">Language</h4>
      <div style={{ height: "250px", overflow: "auto" }}>
        {languages.map((e, index) => (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={filteredLanguages[index][1]}
              id={e}
              name={e}
              onChange={(event) => handleLanguageChange(index,event.target.name)}
            />
            <label className="form-check-label" htmlFor={e}>
              {e}
            </label>
          </div>
        ))}
      </div>
      <h4 className="my-2">Currency</h4>
      <div style={{ height: "250px", overflow: "auto" }}>
        {currencies.map((e, index) => (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={filteredCurrencies[index][1]}
              id={e}
              onChange={() => handleCurrenciesChange(index)}
            />
            <label className="form-check-label" htmlFor={e}>
              {e}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
  else 
  return <div>Loading</div>
}

export default Filter;
