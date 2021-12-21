import React from 'react'

import Contact from './Contact'
import Projects from './Projects'
import AboutMe from './AboutMe'

import ProjectDetails from './ProjectDetails'

import {Route,Link,BrowserRouter as Router, withRouter} from 'react-router-dom'
import {Switch} from 'react-router'

import './Menu.css'

const Menu=(props)=>{
    const {history}=props 
    
    function redirect(route){
        history.push(route)
    }

    return ( 
        <>
            <Router>
                <>

                {}

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
                        
                                <label onClick={redirect('/projects')} htmlFor="btn-menu" className="header__menu__container--link" title="Projects">
                                Projects
                                </label>
                           
                            <Link to="/about-me" className="header__menu__container--link" title="About me">
                            About me
                            </Link>
                            <Link to="/contact" className="header__menu__container--link" title="Contact">
                            Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/project/:id" >
                        <ProjectDetails/>
                    </Route>
                    <Route path="/contact" exact>
                        <Contact/>
                    </Route> 
                    <Route path="/about-me" exact>
                        <AboutMe/>
                    </Route>
                    <Route path="/projects" exact>
                        <Projects/>
                    </Route>
                </Switch>
                </>
            </Router>
        </>
    )
}

export default withRouter(Menu)
