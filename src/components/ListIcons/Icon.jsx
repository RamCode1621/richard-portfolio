import React from 'react'

import './Icon.css'

function Icon({item}) {
    return (
        <i key={item.name} className={`${item.name} icon ${item.colorClass}`}></i>        
    )
}
// <<i class="fas fa-database"></i>
export default Icon
