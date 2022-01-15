import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Masonry from 'react-masonry-css'

import './Projects.css'

const Proyects = () => {
    const [projects,setProjects]=useState([])

    const getData=async()=>{
        const data=await fetch('https://richard-portfolio-api.herokuapp.com/projects')
        const myJson=await data.json()
        setProjects(myJson)
    }

    useEffect(() => {
        getData()
    }, [])
 
    
    const breakpointColumnsObj = {
        default: 5,
        1500: 4,
        1100: 3,
        800: 2,
        550: 1
      };
      

    return (
        <div className='projectsList'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
            {
                projects.map(item=>(
                    <div className="projectsList__item grid-item" key={item._id}>
                        <Link  to={`/project/${item.name}`} > 
                            <img src={item.images}  alt={item.description}/>
                        </Link>
                    </div>
                ))
            }
            </Masonry>
        </div>
        
    )
}

export default Proyects