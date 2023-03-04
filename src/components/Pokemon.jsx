import React, {useState, useEffect} from 'react';

const api = 'https://pokeapi.co/api/v2/';

const Pokemon = (props) =>{
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        fetch(api+'pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
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