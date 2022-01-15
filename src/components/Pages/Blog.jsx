import React from 'react'
import Menu from '../NavMenu/Menu'
import Publications from '../ListPublications/Publications'

function Blog() {
    return (
        <div className='container-detailsProject'>
            <Menu/>
            <Publications/>
            {/* <Footer/> */}
        </div>
    )
}

export default Blog
