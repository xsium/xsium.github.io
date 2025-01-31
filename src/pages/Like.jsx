import React, {useState} from 'react'
import './Like.css'
export default function Like() {
  const [like, setLike] = useState( 1 );
  function handleClick(event){
    if(event.target.classList.contains('like')){
        setLike(like - 1)
    }
    else setLike(like + 1);
    event.target.classList.toggle('like');
  }

  return (
    <>
    <div className='d-flex flex-row align-items-center m-3'>
        <div className='likebtn me-4' onClick={ event => handleClick(event) }></div>
         {like>1 && <p>{like} Likes</p>}
         {like<2 && <p>{like} Like</p>}  
    </div>
    </>
);
}