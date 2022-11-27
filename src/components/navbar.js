import React from 'react'
import './navbar.css'
import Navlinks from './navlinks'


export default function Navbar() {
    const [navIcon, setNavicon]= React.useState(false)

    return (
        <>
            <div
                className='nav'>
                <span
                    className='logo'>
                    3FK5
                </span>

               <Navlinks/>

                <div
                    className='mobileNav'>
                    {navIcon ?
                        <i onClick={()=> setNavicon(false)} className='uil uil-times'></i>
                        :
                        <i onClick={()=> setNavicon(true)} className='uil uil-apps'></i>
                    }
                </div>       

                {navIcon && (
                    <div
                        className='mobileNavText'>
                        <Navlinks/>
                    </div>
                )}
         
            </div>
        </>
    )
}