
import Footer from '../Footer/Footer'
import Info from '../MyInfo/Info'
import Menu from '../NavMenu/Menu'

import './AboutMe.css'

function AboutMe() {
    return ( 
        <div className='container-aboutme'> 
            <Menu/>
            <Info/>
            <Footer/>
        </div>
    )
}

export default AboutMe
