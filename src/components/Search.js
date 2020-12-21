import React, { Component } from 'react';
import '../css/Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: '',
            image: '#',
            resumen: '',
//            url: "https://localhost:3000/search/movies/"

        }
    }


    myAppi = async () => {
 //       let res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=b78674d3628205a6d6750bf73d941a40&query=Frozen")
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b78674d3628205a6d6750bf73d941a40&query=${this.state.serie}/`)
//        let res = await fetch(`https://localhost:3000/search/movies/`)
//        let res = await fetch(`${this.state.url}`)
        let data = await res.json()
 //       console.log(data[0].show.name)
        this.setState({
            serie: data.results[0].original_title,
            image: data.results[0].poster_path,
            resumen: data.results[0].overview,

        })
    }

    handleName = event => {
        this.setState({
            serie: event.target.value
        })
    }

    handleSubmit = event =>{
        this.myAppi()
        event.preventDefault()
    }

 
    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className=" header-fondo">
                    <img class="poke-img" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"></img>
                        BUSCADOR DE PELICULAS
                    <i class="far fa-smile-wink"></i>
                    </div>
                    <div className="card-body ppal">
                        <form onSubmit={this.handleSubmit}>
                            <label className="label-color" > PELICULA: </label>
                            <br />
                            <input className="input-color"
                                type="text"
                                placeholder="por ejemplo ... "
                                value={this.state.serie}
                                onChange={this.handleName}
                            />
                            <br /> <br />
                            <button type="submit" className="btn btn-dark button-color">BUSCAR</button>
                            <br/>                            
                            <img src={`https://image.tmdb.org/t/p/w300/`+this.state.image} />     
                            <br/>
                            <p>{this.state.resumen}</p>
                        </form>
                    </div>
                    <div className=" footer-fondo">
                        Luis 2<i class="far fa-smile"></i>2<i class="far fa-smile"></i>
                    </div>
                </div>


            </div>
        );
    }
}

export default Search;

/*
                            <img src={`https://image.tmdb.org/t/p/w300/`+this.state.image!==""&&`https://image.tmdb.org/t/p/w300/`+this.state.image} />    
*/