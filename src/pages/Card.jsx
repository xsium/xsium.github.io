import React, {useState} from 'react'
import './Card.css'
import Like from './Like.jsx';
export default function Card({pseudo, mail, image, description,sexe}) {
  const [border, setBorder] = useState( false );
  return (
    <article className={border ? 'card-border' : ''} onMouseOver={() => setBorder(true)} onMouseLeave={() => setBorder(false)}> 
        <div className={ sexe==="H" ?'card blue': sexe==="F" ?'card rose':'card yellow'} >
          <div className="card-header d-flex justify-content-between">
            <div className="container">
              <h2 className="lh-1 card-title">{pseudo}</h2>
              <h3 className="lh-1 card-subtitle text-black-50">{mail}</h3>
            </div>
            <img className="w-25" src={image} alt="image" />
          </div>
          <div className="card-body">
            <p className="lh-1 card-text">
              {description}
            </p>
          </div>
          <Like />
        </div>

    </article>
);
}