import React from 'react'
import Icon from './Icon'

import './ListIcons.css'

function ListIcons({list}) {
    return(
        <ul>
            {
                list.map(item=>(
                    <li>
                         <Icon key={item.name} item={item}/>
                    </li>
                ))
            }
        </ul>
    )

}

export default ListIcons
