import React, {useState} from 'react'

const Todos = [
    { task: 'Manger', date: '27/01/2025', task_check: true, hour: 1, category: "besoin" },
    { task: 'Dormir', date: '27/01/2025', task_check: true, hour: 3, category: "besoin" },
    { task: 'Etudier', date: '27/01/2025', task_check: false, hour: 6, category: "besoin" },
    { task: 'Jouer', date: '27/01/2025', task_check: false, hour: 4, category: "loisir" },
  ];


//function Todos--------------------------------------
function Todo({ task, date, task_check, heureRestante }){
    const [heures, setHeures] = useState( heureRestante );
    function handleClick(task){alert(task);  }
    function handleClickMinus(){if(heures>0){setHeures(heures - 1)}}
    function handleClickPlus(){setHeures(heures + 1);}
  
        return(
          <>
          <div className='d-flex flex-row align-items-center justify-content-between'>
            <li className={task_check ?'green':'orange'} onClick={()=>{handleClick(task)}}>
              {task} - {date} {task_check>0 && <input type="checkbox" defaultChecked />}
            </li>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <button onClick={()=>{handleClickMinus()}}> - </button>
              <p>heures restantes: {heures}</p> 
              <button onClick={()=>{handleClickPlus()}}> + </button>
            </div>
          </div>
          </>
        )
  }

//Affichage TODO--------------------------------------
export default function ToDoList({children}){
    const [loisir, setLoisir] = useState( true );
    const [besoin, setBesoin] = useState( true );
    const currentDate = new Date().toLocaleString();
    function handleChangeCatLoisir(){
      setLoisir(!loisir);
      console.log(!loisir);
    }
    function handleChangeCatBesoin(){
      setBesoin(!besoin);
      console.log(!besoin);
    }
  
    const TODOLIST = Todos.filter(element => { 
      if( element.category == "besoin" && !besoin == true ){ return false }
      if( element.category == "loisir" && !loisir == true ){ return false }
      else return true;
    });
    console.log(TODOLIST);
  
    return (
      <article className='todolist'>
        <h1 className='text-center'>Ma ToDo List :</h1>
        <h2>{currentDate}</h2>
        <div className='mx-auto container'>
            <h2>Catégories</h2>
            <div className='d-flex flex-row justify-content-evenly'>
              <div>
                <label htmlFor="loisir">Loisirs:</label>
                <input className='m-1' type="checkbox" checked={loisir} name='loisir' onChange={()=>{handleChangeCatLoisir()}}/>
              </div>
              <div>
                <label htmlFor="besoin">Besoins:</label>
                <input className='m-1' type="checkbox" checked={besoin} name='besoin' onChange={()=>{handleChangeCatBesoin()}}/>
              </div>
            </div>
        </div>
        <ul>
        {TODOLIST.map((todo, index) => (
            <Todo key={index} task={todo.task} date={todo.date} task_check={todo.task_check} heureRestante={todo.hour} click={()=>handleClick()} />
        ))}
        </ul>
        {children}
      </article>
    );
  }
  //----------------------------------------------------

  