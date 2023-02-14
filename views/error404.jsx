const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
              <img src= "/images/vijesh-datt-a9NHBQrQYHE-unsplash.jpg"   alt="Cute Dog"/>
              </div>
              <div>
                Photo by <a href="https://unsplash.com/@vijeshdatt">Vijesh Datt</a> on <a href="https://unsplash.com/photos/a9NHBQrQYHE">Unsplash</a>
              </div>

              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
