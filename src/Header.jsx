import logo from './assets/winkporing.png'
import {Link, NavLink } from 'react-router-dom';
import './Header.css'

export default function Card() {
<NavLink to={"/"}>Accueil</NavLink>
    return (
        <>
        <header id="app_header">
        <nav className="navbar navbar-expand-lg d-flex flex-row">
        <div className="container" id="header1">
          <a className="navbar-brand pc" href="/"
            ><img id="logo" src={logo} alt="logo"
          /></a>
        </div>
        <div className="container-fluid d-flex flex-column" id="header2">
          <h1>Tyrfing's Den</h1>
        </div>
      </nav>
      </header>
      </>
  );
  }


