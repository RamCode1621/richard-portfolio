import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import ListIcons from '../ListIcons/ListIcons'

import './ProjectInfo.css'

function ProjectInfo() {
    const {id}=useParams()

    const [project,setProject]=useState({technologies: [],links:[]})

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
                <br />
                <br />
                <div className="links-project">
                    <span>GitHub repository: <a href={project.links[0]} target="_blank" rel="noopener noreferrer">{project.links[0]}</a></span>
                     
                    <span>View project: <a href={project.links[1]} target="_blank" rel="noopener noreferrer">{project.links[1]}</a></span>
                </div>
                <span>This project has make with:  
                </span>
                {/* {console.log(project.links)} */}
                <ListIcons list={project.technologies}/>
           
            </div>
        </div>
    )
}

export default ProjectInfo
