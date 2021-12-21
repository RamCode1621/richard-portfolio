import React from 'react'
import './SocialMedia.css'

function SocialMedia({url,icon,color}) {

    const classes=`${icon} ${color}`

    return (
           <div className='containerSocialMedia'>
                <a rel="noreferrer" target="_blank" href={url}>
                    <i className={classes}></i>
                </a>
           </div>
    )
}

export default SocialMedia
