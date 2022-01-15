import React from 'react'
import Menu from '../NavMenu/Menu'
import Publications from '../ListPublications/Publications'

import './Blog.css'

function Blog() {
    return (
        <div className='container-blog'>
            <Menu/>
            <Publications/>
            {/* <Footer/> */}
        </div>
    )
}

export default Blog
