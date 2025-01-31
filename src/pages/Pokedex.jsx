import React, {useEffect, useState} from 'react'
import './Pokedex.css'

function Pokemon({id, name, image, onClick }){
    return(
        <>
        <div  className='pokemon'>
            <p>{id}</p>
            <p>{name}</p>
            <img onClick={(event) => {event.stopPropagation(),onClick(event)}} src={image} alt="" />
        </div>
        </>
    )
}
function PokemonProfil({pokemon}){
    console.log(pokemon)
    return(
        <>
        <div className='pokemon mx-auto w-50'>
            
            <p>{pokemon.id}</p>
            <p>{pokemon.name} <img src={pokemon.apiTypes[0].image} alt="" />{pokemon.apiTypes[1]!== undefined && <img src={pokemon.apiTypes[1].image}/>}</p>
            <div className='d-flex flew-row'>
            <img src={pokemon.image} alt="" />
            <div className="mt-3 text-sm">
            <p>HP: {pokemon.stats.HP}</p>
            <p>Attaque: {pokemon.stats.attack}</p>
            <p>Défense: {pokemon.stats.defense}</p>
            <p>Attaque spéciale: {pokemon.stats.special_attack}</p>
            <p>Défense spéciale: {pokemon.stats.special_defense}</p>
            <p>Vitesse: {pokemon.stats.speed}</p>
            </div>
            </div>
        </div>
        </>
    )
}


export default function Pokedex(){
 const [pokeList, setPokeList] = useState( [] );
 const [poke, setPoke] = useState(null);

 useEffect(()=>{
    const AC = new AbortController();

    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/20',{signal: AC.signal})
    .then(response => response.json())
    .then(json=>{
        console.log("fetch!");
        setPokeList(json);
    })
    return ()=>{
        AC.abort();
    }
},[])

useEffect(() => {
    if(poke!=null){
        document.title = poke.name
    }
  },[poke]);

function handleClick(event){
    
    const selected = document.querySelectorAll('.select');
    if(selected.length>0){
        selected.forEach(element => {
            if(element!=event.target){
                element.classList.remove('select');
            }
        });
    }
    event.target.classList.toggle('select');
    console.log(event.target.src)
    pokeList.forEach(element => {
        if(element.image.includes(event.target.src)){
            setPoke(element);
        }
    });
  }
console.log(poke)
    return(
        <>
        <div className='d-flex flex-column'>
        <h2 className="text-center">Pokedex</h2>
        {poke !== null && <PokemonProfil pokemon={poke} />}
        <div className='d-flex flex-wrap justify-content-center'>
        {pokeList.map((pokemon, index) => (
            <Pokemon
            key={index}
            id={pokemon.pokedexId}
            name={pokemon.name}
            image={pokemon.image}
            onClick={handleClick}
            />
        ))}
        </div>
        </div>
        </>
    );
}