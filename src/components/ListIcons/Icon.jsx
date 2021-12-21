import React from 'react'

import './Icon.css'

function Icon({item}) {
    return (
        <i key={item.name} className={`fab fa-${item.name} icon ${item.colorClass}`}></i>        
    )
}

export default Icon
