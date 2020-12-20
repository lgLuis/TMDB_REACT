import React, { Component } from 'react';
import '../css/Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: '',
            image: '#',
            resumen: '',
            link: ''
        }
    }






    myAppi = async () => {
        //        let res = await fetch("http://api.tvmaze.com/search/shows?q=alf")
        let res = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.serie}/`)
        let data = await res.json()
        console.log(data[0].show.name)
        this.setState({
            serie: data[0].show.name,
            image: data[0].show.image.medium,
            resumen: data[0].show.summary,
            link: data[0].show.officialSite
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
                        BUSCADOR DE SERIES 
                    <i class="far fa-smile-wink"></i>
                    </div>
                    <div className="card-body ppal">
                        <form onSubmit={this.handleSubmit}>
                            <label className="label-color" >INGRESE EL NOMBRE DE LA SERIE: </label>
                            <br />
                            <input className="input-color"
                                type="text"
                                placeholder="por ejemplo ALF"
                                value={this.state.serie}
                                onChange={this.handleName}
                            />
                            <br /> <br />
                            <button type="submit" className="btn btn-dark button-color">BUSCAR</button>
                            <br/>
                            <img src={this.state.image} alt={this.state.serie} title={this.state.serie}/>
                            <br/>
                            {(this.state.link!=="")&&<a href={this.state.link} target="_blank" className="sitio-color">SITIO WEB OFICIAL</a>}
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
trae titulo e imagen

import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: '',
            image: '#'
        }
    }






    myAppi = async () => {
        //        let res = await fetch("http://api.tvmaze.com/search/shows?q=alf")
        let res = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.serie}/`)
        let data = await res.json()
        console.log(data[0].show.name)
        this.setState({
            serie: data[0].show.name,
            image: data[0].show.image.medium
        })
    }

    handleName = event => {
        this.setState({
            serie: event.target.value
        })
    }

    handleSubmit = event =>{
        var nose = this.state.name
        console.log(nose)
        this.myAppi()
        event.preventDefault()
    }

 

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        BUSCADOR DE SERIES
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <label>INGRESE EL NOMBRE DE LA SERIE: </label>
                            <br />
                            <input
                                type="text"
                                placeholder="por ejemplo ALF"
                                value={this.state.serie}
                                onChange={this.handleName}
                            />
                            <br /> <br />
                            <button type="submit" className="btn btn-primary">BUSCAR</button>
                            <br />
                            <p>{this.state.serie}</p>
                            <img src={this.state.image} alt=""/>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        luis 2020
                    </div>
                </div>


            </div>
        );
    }
}

export default Search;


*/