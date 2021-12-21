import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

import './Projects.css'

const Proyects = () => {
    const [projects,setProjects]=useState([])

    const getData=async()=>{
        const data=await fetch('http://localhost:4000/projects')
        const myJson=await data.json()
        setProjects(myJson)
    }

    useEffect(async() => {
        getData()
    }, [])
 
    
    return (
        <div className="projectsList">
            {
                projects.map(item=>(
                    <li className="projectsList__item" key={item.id}>
                        <Link to={`/project/${item.id}`}>
                            <img src={item.images} width='250px' alt={item.description}/>
                        </Link>
                    </li>
                ))
            }
        </div>
    )
}

export default Proyects
