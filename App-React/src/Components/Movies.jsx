import { Component } from 'react'
import { MoviesList } from './MoviesList'

export class Movies extends Component {
  constructor() {
    super()
    this.state = {
      moviesList: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/movies')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(movies => {
        this.setState({ moviesList: movies.data })
        /* console.log(movies.data); */
      })
      .catch(error => console.log(error))
  }



  render() {
    return (
      <>
        <table className='table table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Calificacion</th>
              <th>Premios</th>
              <th>Duracion</th>
            </tr>
          </thead>
          {this.state.moviesList.map((element, i) => {
            return (
              <MoviesList
                key={element.id + i}
                id={element.id}
                titulo={element.title}
                calificacion={element.rating}
                premios={element.awards}
                duracion={element.length}
              />
            )
          })}
        </table>
      </>
    )
  }
}
