import { Component } from "react";
import Genre from './Genre';

export class GenresInDB extends Component {
  constructor(){
    super()
    this.state = {
      genreList : [],
      bg: null,
      mouseOver: false
    }

    // Atar el contexto de this al método handleMouseOver
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount(){
  fetch('http://localhost:3001/api/genres')
    .then(respuesta =>{
      return respuesta.json()
    })
    .then(genres => {
      /* console.log(genres); */
      this.setState({genreList : genres.data})
    })
    .catch(error => console.log(error))
  }

  handleMouseOver(){
    if (this.state.mouseOver == false) {
      this.setState({
        bg: "bg-secondary",
        mouseOver: true
        
      })
    } else{
      this.setState({
        bg: null,
        mouseOver: false
      })
    }
  }

  render(){
    return (
      <>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 onMouseOver={this.handleMouseOver} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
            </div>
            <div className={`card-body fondoCaja ${this.state.bg}`}>
              <div className="row">
                {this.state.genreList.map((genre, index) => {
                  return <Genre  {...genre} key={index} />
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}