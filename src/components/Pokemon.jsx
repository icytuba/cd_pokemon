import React, {useState, useEffect} from 'react';
import axios from 'axios'

const api = 'https://pokeapi.co/api/v2/';

const Pokemon = (props) =>{
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        axios.get(api + 'pokemon?limit=100000&offset=0')
            .then(res => {
                console.log(res);
                return setPokemon(res.data.results)
            })
            .catch(err => console.log(err))
    },[]);

    return(
        <div>
            {pokemon? pokemon.map((pokemon, index) => {
                return(
                    <div key = {index}>
                        {pokemon.name}
                    </div>
                )
            }): null}
        </div>
    );
}

export default Pokemon;