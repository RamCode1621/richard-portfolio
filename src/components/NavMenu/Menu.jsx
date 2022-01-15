import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

function Menu() {
    return (
        <>
        <div className="header">
        <label htmlFor="btn-menu">
            <i className="fas fa-bars header__iconMenu"></i>
        </label>
        <input type="checkbox" name="btn-menu" id="btn-menu" />
        <h1 className="header__developer">Richard Aguilar</h1>
            <div className='header__menu'>
                <div className="header__menu__container">
                    <label htmlFor="btn-menu"> 
                        <i className="fas fa-bars header__iconMenu btn-icon2"></i>
                    </label>
                
                    
                    <Link to="/" className="header__menu__container--link" title="Projects">
                        <div className="header__menu__container--ContentLink">
                            Projects 
                        </div>    
                    </Link>

                    <Link to="/about-me" className="header__menu__container--link" title="About me">
                        <div className="header__menu__container--ContentLink">
                            About me
                        </div>
                    </Link>

                    <Link to="/contact-me" className="header__menu__container--link" title="Contact">
                        <div className="header__menu__container--ContentLink">
                            Contact me
                        </div>
                    </Link>
                    
                    <Link to="/blog" className="header__menu__container--link" title="Contact">
                        <div className="header__menu__container--ContentLink">
                            My blog
                        </div>
                    </Link>

                </div>
            </div>
        </div>
        </>
    )
}

export default Menu
