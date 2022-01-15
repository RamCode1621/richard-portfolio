// import Footer from '../Footer/Footer'
import List from '../ListSocialMedias/List'
import Menu from '../NavMenu/Menu'

import './ContactMe.css'

// import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

function ContactMe() {
    return (
        <div className='container-contact'>
            <Menu/>
            <List/>
            {/* <SunEditor/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default ContactMe
