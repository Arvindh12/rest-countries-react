import React from 'react'

function CountryCard({countries}) {
    // countries.languages.map((lang) => lang.name)
    return (
        
            <div className="card mx-auto my-3" style={{width: "18rem"}} >
 <img src={countries.flag} className="card-img-top" alt="..." />
 <div className="card-body">
   <h5 className="card-title">{countries.name}</h5>
    <p className="card-text">Subregion {countries.subregion}</p>
 </div>
 <ul className="list-group list-group-flush">
    <li className="list-group-item">Capital {countries.capital}</li>
   <li className="list-group-item">Poplation {countries.population}</li>
    <li className="list-group-item">Language {countries.languages.map(e => ( e.name ) )}</li>
 </ul>
 
</div>
 
    )
}

export default CountryCard
