import Footer from '../Footer/Footer'
import List from '../ListSocialMedias/List'
import Menu from '../NavMenu/Menu'

import './ContactMe.css'

function ContactMe() {
    return (
        <div className='container-contact'>
            <Menu/>
            <List/>
            <Footer/>
        </div>
    )
}

export default ContactMe
