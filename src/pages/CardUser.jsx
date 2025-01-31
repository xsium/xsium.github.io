import React, {useState} from 'react'
import Card from './Card';
import reactlogo from '../assets/react.svg'


export default function Carduser({Users}){
    const [search, setSearch] = useState( "" );
    const Users_list = Users.filter(element => { 
      if( !element.pseudo.includes(search)){ return false; }
      else return true;
    });
    return(
      <>
      <h1>CardUser</h1>
      <input className='m-4' type="text" placeholder='Chercher un pseudo...' onChange={(event)=>{setSearch(event.target.value);}}/>
      <h1>Liste des Utilisateurs:</h1>
      <div className='card-list'>
            {Users_list.map((user, index) => (
              <Card
              key={index}
              pseudo={user.pseudo}
              mail={user.mail}
              image={user.image}
              description={user.description}
              sexe={user.sexe}
              />
            ))}
        
      </div>
      <p>Il y a {Users.length} Utilisateurs</p>
      
      </>
    );
  }
