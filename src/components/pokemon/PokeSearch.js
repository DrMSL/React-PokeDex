import React, { Component } from 'react';
import './Search.css';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class PokeSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
            pokemon: [],
            filteredPokemons: {}
            
        } // fin state

       
    } // fin constructor

   
 


     
     updateSearch(event) {
        this.setState({search: event.target.value})
     }


     async componentDidMount(){

        const res = await axios.get(this.state.url)
        this.setState({pokemon: res.data['results']});

     } 



    render() {
        
    

        let filteredPokemons = this.state.pokemon.filter(
            (pokemon) => {
                return pokemon.name.indexOf(this.state.search) !== -1;
            }
        );
    
        




        return (
            <div className="container">
                <div >
                <h1
              style={{ width: '100%', padding: '10px 5px', backgroundColor: '#55a0d6', color: '#fff', marginBottom: '0' }}
              >Search Pokémon</h1>
               
                <label className='search-label' htmlFor='search-input' style={{ display: 'flex', position: 'relative' }}>
                    <input 
                    type="text"
                    name="query"
                    style={{ flex: '10', padding: '15px', outline: 'none'  }}
                    value={this.state.search}
                    id="search-input"
                    placeholder="search..."
                    //onChange={this.filterList}
                    onChange= {this.updateSearch.bind(this)}
                    />
                    <i className="fas fa-search searchicon"  style={{position: 'absolute'}}></i>
                </label>
                </div>


                <div >
                <h2 
                style={{ width: '100%', padding: '10px 5px', backgroundColor: '#55a0d6', color: '#fff', margin: '15px auto' }}
                >Pokemon Results</h2>

                {this.state.pokemon ? ( <div className="row">

                 {/* I should be able to replace this.state.pokemon with filteredPokemons */}
              
              {filteredPokemons.map(pokemon => (
                  <PokemonCard 
                      key={pokemon.name}
                      name={pokemon.name}
                      url={pokemon.url}
                  />
              ))}
            </div>) :(<h1>loading pokemon</h1>)}
                </div>


            </div>
        )







    }
}
