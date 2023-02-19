const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div id='infoPicture'>
            </div>
            <div>
                <img src={data.place.pic} alt={data.place.name} width='600' height='600'/>
            </div>
            <div>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not rated</p>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit 
            </a> 
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
            </div>
           </main>
        </Def>
    )
}

module.exports = show
