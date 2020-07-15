import React ,{useEffect,useReducer} from 'react';
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

  return (
    <div >
     <Searchbox dispatchCountries={dispatchCountries} />
     <div className="container-fluid">
       <div className="row">
           <div className="col-3">
             <Filter />
             </div>
             <div className="col-9">
             <Content countries={countries} />
             </div>
        </div>
       </div>
    </div>
  );
}

export default App;
