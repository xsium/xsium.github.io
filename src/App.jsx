import { createBrowserRouter, RouterProvider, Outlet, Link, NavLink } from 'react-router-dom';
import Accueil from './pages/Accueil'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import CardUser from './pages/CardUser'
import Calendar from './pages/Calendar'
import ToDoList from './pages/ToDoList'
import PageError from './pages/PageError'
import reactlogo from './assets/react.svg'
import './App.css'
import Footer from './Footer';

//Variables-------------------------------------------

const Users = [
  { pseudo: 'Tyrfing', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "H"},
  { pseudo: 'Naali', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "F"},
  { pseudo: 'Adaly', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "non-binaire"},
  { pseudo: 'Tyr', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "H"},
];
//----------------------------------------------------

//Routing---------------------------------------------
const router = createBrowserRouter([
  {
    path : "/",
    element : <>
                <Root />
              </>,
    errorElement: <PageError />,
       children: [
        {
           path: "",
           element: <Accueil /> 
        },
        { 
          path: "portfolio", 
          element: <Portfolio />, 
          children: [
            { path: "carduser",
              element:
                    <section>
                    {Users.length>0 &&
                    <div className='mx-auto container card-user'>
                    <CardUser 
                    Users={Users}
                    />
                    </div>
                    }
                    </section>
            },
            { path: "calendar",
              element:
                    <section>
                    <div className='mx-auto container'>
                    <Calendar />
                    </div>
                    </section> 
            },
            { path: "todolist",
              element:
                    <section>
                    <div className='mx-auto container'>
                    <ToDoList> 
                    <div className='mx-auto container'>
                    <Form onSubmit={handleSubmit} />
                    </div>
                    </ToDoList>
                    </div>
                    </section>
            }
          ]
        },
        {
          path: "contact", element: <Contact /> 
        }
      ]
    }
  ]);
//----------------------------------------------------
function Root() {
  return (
    <>
    <header>
      <h1>TP React Router</h1>
      <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/portfolio">Portfolio</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
    <main>
      <div id='wrap'>
      <Outlet />
      </div>
    </main>
    <Footer />
    </>
  );
}
//----------------------------------------------------
function handleSubmit(event){
  event.preventDefault();
  //console.log(event.target[0].value); //test
  const INPUTS = event.target.querySelectorAll('input[type="text"]');
  INPUTS.forEach((input) => {
    console.log(input.value);
  });
};

//Composant Form--------------------------------------
function Form({ onSubmit }){
    function handleChange(event){
      console.log(event.target.value);
    }
  
    return(
      <form action='#'onSubmit={(event) => {onSubmit(event)}}>
        <input type="text" placeholder='la todo' onChange={(event)=>{handleChange(event)}}/>
        <input type="text" placeholder='la date' onChange={(event)=>{handleChange(event)}}/>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
//----------------------------------------------------

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
