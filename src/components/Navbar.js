import React from 'react'
import Button from './Button'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <h1 className='logo-name'>GitHub search</h1>
                <ul className='nav-links'>
                    <li>
                        <Button />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar