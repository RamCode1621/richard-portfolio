
import Footer from '../Footer/Footer'
import Menu from '../NavMenu/Menu'
import ProjectInfo from '../Project/ProjectInfo'

import './ProjectDetails.css'
 
const ProjectDetails = () => {
    return (
        <div className='container-detailsProject'>
            <Menu/>
            <ProjectInfo/>
            <Footer/>
        </div>
    )
}

export default ProjectDetails
