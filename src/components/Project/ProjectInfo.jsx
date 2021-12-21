import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import ListIcons from '../ListIcons/ListIcons'

import './ProjectInfo.css'

function ProjectInfo() {
    const {id}=useParams()

    const [project,setProject]=useState({technologies: []})

    const getData=async()=>{
        const data=await fetch(`https://richard-portfolio-api.herokuapp.com/project/${id}`)
        const myProject=await data.json()
        setProject(myProject)
    }

    useEffect(() => { 
        getData() 
    }, [])

    return (
        <div className='details-project'>
            <h3>{project.name}</h3>
            
            <img className="image-project" src={project.images} alt={project.description}/>
            
            <div className='description-project'>{project.description}
            <br />
                <span>This project has make with:  
                </span>
                {/* {console.log(project.technologies)} */}
                <ListIcons list={project.technologies}/>
           
            </div>
        </div>
    )
}

export default ProjectInfo
