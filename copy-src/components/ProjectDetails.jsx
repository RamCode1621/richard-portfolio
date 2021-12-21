import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../src/components/NavMenu/Menu'

const ProjectDetails = () => {

    const {id}=useParams()

    const [project,setProject]=useState([])

    const getData=async()=>{

        const data=await fetch(`http://localhost:4000/project/${id}`)
        const myProject=await data.json()
        setProject(myProject)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Menu/>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.images} width='250px' alt={project.description}/>
        </div>
    )
}

export default ProjectDetails
