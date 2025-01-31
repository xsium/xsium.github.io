import {Link, NavLink, Outlet } from 'react-router-dom';
export default function Portfolio(){
    return(
        <div className='mx-auto container d-flex justify-content-center flex-column'>
        <h1 className='text-center'>Portfolio</h1>
        <nav className='text-center'>
        <Link to="carduser">CardUser</Link> | 
        <Link to="calendar">Calendar</Link> | 
        <Link to="todolist">TodoList</Link>
        </nav>
        <div>
            <Outlet />
        </div>
        </div>
    )
}