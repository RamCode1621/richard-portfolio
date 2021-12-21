import React from 'react'
import Icon from './Icon'

function ListIcons({list}) {
    return(
        <div>
            {
                list.map(item=>(
                    <Icon key={item.name} item={item}/>
                ))
            }
        </div>
    )

}

export default ListIcons
