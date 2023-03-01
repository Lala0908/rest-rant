const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
        No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not Yet Rated
        </h3>
    )
        if (data.place.comments.length) {
            let sumRatings = data.place.comments.reduce((tot, c) => {
                return tot + c.stars
            }, 0)
            let averageRating = Math.round(sumRatings / data.place.comments.length)
            let stars = ''
            for (let i = 0; i < averageRating; i++) {
                stars += '⭐️'
            } 
            rating = (
                <h3>
                    {stars} stars
                </h3>
        )
                return (
                    <div className="border col-sm-4">
                        <h2 className="rant"> {c.rant ? 'Rant!😡'  : 'Rave! 😁'}</h2>
                        <h4> {c.content}</h4>
                        <h3>
                            <strong>- {c.author}</strong>
                        </h3>
                        <h4>Rating: {c.stars}</h4>
                    </div>
                )
            }
        
    return (
        <Def>
          <main>
            <div className="row"></div>
            <div className='col-sm-6'></div> 
            <h1> {data.place.name}</h1>  
                <img src={data.place.pic} alt={data.place.name} />
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <div className='col-sm-6'></div>
            <hr />
            <h2>Comments</h2>
                {comments}
            <div>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            {rating}
            <br />
            <p>Not rated</p>
            <h2>Description</h2>
            <h3> 
                {data.place.showEstablished()} 
            </h3>
            <h4>
                Serving {data.place.cuisines}
            </h4>
            <p> Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
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
