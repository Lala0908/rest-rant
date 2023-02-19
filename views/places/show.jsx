const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>

            <h3>
                Rating -
                
                Currently Unrated
                
            </h3>

            <a href="" className="btn btn-warning"> 
            Edit 
            </a> 
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            
            <p>
            <h3>
                Comments - No Comments as of yet!
            </h3>
            </p>
            </form>

          </main>
        </Def>
    )
}

module.exports = show
