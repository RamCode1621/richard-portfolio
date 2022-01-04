import React from 'react'
// import Footer from '../Footer/Footer'
import Menu from '../NavMenu/Menu'
import ProjectsList from '../Projects/ProjectsList'
import Title from '../Title/Title'

import './Projects.css'

function Projects() {
    return (
        <>
            <Menu/>
            <Title/>
            <div className='projects-page-container'> 
                <ProjectsList/>   
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Projects
