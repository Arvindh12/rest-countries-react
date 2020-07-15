import React from 'react'

function ContentDisplay({countries}) {
    return (
        <div>
            Content ...
    {countries.map(e => <p>{e.name } {e.population}  </p>) }
        </div>
    )
}

export default ContentDisplay
