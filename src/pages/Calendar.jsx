import React, {useState} from 'react'
import './Calendar.css'

//Variables-------------------------------------------
const Month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
const Days=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
const Day_Letter= Days.map((day) => { 
    return day.charAt(0);
  });
  console.log(Day_Letter);
const EVENT_LIST =[];
for(let i=0; i<31; i++){
    EVENT_LIST.push({confirmed:false});
}
//----------------------------------------------------

//Composants-------------------------------------------
function Day({jour, className, onClick}){
    return (
      <>
      <div className={className} onClick={(event) => {onClick(event)}}>{jour}</div>
      </>
    );
  }

  function FormCalendar({onSubmit}){
    return(
        <form className='formcalendar d-flex flex-column'action='#'onSubmit={(event) => {onSubmit(event)}}>
            <h2>Ajouter un événement</h2>
            <input className="formcal" type="text" placeholder='Event' />
            <input className="formcal" type="time" name="time"/>
            <input className="formcal" type="text" placeholder='Lieu' />
            <input type="submit" value="Envoyer" />
        </form>
    );
  }
function DisplayEvent({eventList, day}){
    return(
        <div className="event-container">
        <h2>Événements du {day}</h2>
        
        {eventList[day-1].confirmed ? (
            <Event nom={eventList[day-1].nom} heure={eventList[day-1].heure} lieu={eventList[day-1].lieu} />
        ) : (
        <p>Aucun événement pour ce jour.</p>
        )}
        </div>
            
    );
}

function Event({heure, lieu, nom}){
    return(
        <>
        <div className='event-text'>
            <h4>{nom}</h4>
            <hr/>
            <p>{heure} - {lieu}</p>
        </div>
        </>
    );
}
//----------------------------------------------------


export default function Calendar(){
  const [eventList, setEventList] = useState( EVENT_LIST );
  const [day, setDay] = useState( null );
  const Row=[];
  for(let i=0; i<31;i++){
    Row[i]={jour:i+1, className: "backgroundWhite backgroundOrange"};
  }

  function handleClick(event){
    const selected = document.querySelectorAll('.selected');
    if(selected.length>0){
        selected.forEach(element => {
            if(element!=event.target){
                element.classList.remove('selected');
            }
        });
    }
    event.target.classList.toggle('selected');
    setDay(event.target.innerText);
  }
  function handleSubmit(event){
    event.preventDefault();
    //console.log(event.target)
    let form=true;
    const INPUTS = event.target.querySelectorAll('.formcal');
    INPUTS.forEach((input) => {
        if(input.value==""){
            form=false;
        }
    });
    if(form==false){alert("merci de renseigner tous les champs!");}
    else{
        const DATE = [...document.querySelectorAll(".backgroundWhite")];
        console.log(DATE);
        let selected;
        DATE.forEach(element => {
            if(element.classList.contains("selected")){
                selected=DATE.indexOf(element);
            }
        });
        console.log(selected);
        if(selected==undefined || selected==null){
            alert("merci de choisir une date!");
        }else{
            const NEW_EVENT={nom: INPUTS[0].value, heure: INPUTS[1].value, lieu: INPUTS[2].value, index: selected, confirmed: true};
            console.log(NEW_EVENT);
            const Tab=[...eventList];
            Tab[selected]=NEW_EVENT;
            setEventList(Tab);
            DATE.forEach(element => {
                if(element.classList.contains("selected")){
                    element.classList.add("confirmed");
                    element.classList.remove("selected");
                    
                }
            });
        }
        
    }

    
  }
  console.log(eventList);


  return (
    <>
    <div>
        <h2 className='text-center'>Calendar</h2>
    <div className='calendar-wrap'>
    <FormCalendar onSubmit={handleSubmit}/>
    <article className='card'id='calendar'>
        <div className='month'>
            <Day
            jour={Month[9]}
            className="backgroundOrange"
            />
        </div>
        <div className='grid7'>
        {Day_Letter.map((day, index) => (
            <Day
            key={index}
            jour={day}
            className="days"
            />
        ))}
        </div>
        <div className="grid7 card-calendar">
        {Row.map((day, index) => (
            <Day
            key={index}
            jour={day.jour}
            className={day.className}
            onClick={handleClick}
            />
        ))}
        </div>
    </article>
    {day !== null && <DisplayEvent eventList={eventList} day={day} />}
    </div>
    </div>
    </>
  );
}