import React ,{useEffect,useReducer,useState} from 'react';
import './App.css';
import Searchbox from "./Searchbox"
import Filter from './Filter'
import Content from './ContentDisplay'

function App() {

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all').then( res => res.json())
    .then(data => {
      dispatchCountries({type : "UPDATE" , payload : data })
    })
  }, [])

  const reducerCountries = (state , action) => {
    switch(action.type){
      case 'UPDATE':
        return ( action.payload )
    }
  }

  const [ countries , dispatchCountries ] = useReducer(reducerCountries, [] )

  const [filteredLanguages, setFilteredLanguages] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [filteredPopulation, setFilteredPopulation] = useState([0,1]);

  const props = {
    filteredLanguages, setFilteredLanguages,
    filteredCurrencies, setFilteredCurrencies,
    filteredPopulation, setFilteredPopulation
  }

  return (
    <div >
     <Searchbox dispatchCountries={dispatchCountries} />
     <div className="container-fluid">
       <div className="row mt-3">
           <div className="col-md-3">
             <Filter countries={countries} {... props} />
             </div>
             <div className="col-md-9 mt-3">
            
             <Content countries={countries} {...props} />
              
             </div>
        </div>
       </div>
    </div>
  );
}

export default App;
