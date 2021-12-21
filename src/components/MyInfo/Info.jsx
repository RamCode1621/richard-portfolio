import { useState,useEffect } from 'react'
import './Info.css'

function Info() {

    const [info, setMyInfo] = useState([])

    const getData=async()=>{
        const data=await fetch('https://richard-portfolio-api.herokuapp.com/info')
        const json=await data.json()
        setMyInfo(json[0])
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        
        <div className='infoContainer'>
            <img className="image" src={info.image}  alt={info.name}/>
            <h3 className='tittle'>{info.tittle}</h3>
            <p className='description'>{info.description}</p>
        </div>
    )
}

export default Info
