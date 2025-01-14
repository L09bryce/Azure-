import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar navbar-expand bg-light" id='navCont'>
            <div className="container navbar-nav ms-auto py-3 fw-bolder" id='nav'>
                <a href=""><li>MENU</li></a>
                <a href="" className="mx-2"><li>BOOKING</li></a>
                <a href="" className="mx-2"><li>Azure</li></a>
                <a href="" className="mx-2"><li>WEEKLY SPECIALS</li></a>
                <a href="" className="mx-2"><li>CONTACTS</li></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar