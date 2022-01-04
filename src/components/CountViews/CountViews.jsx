import React,{useEffect,useState} from 'react'
import './CounterViews.css'


function CountViews() {
    const [counterViews, setCounterViews] = useState({views:0})

    const getData=async()=>{
        const data=await fetch('https://richard-portfolio-api.herokuapp.com/globalVules/numViews')
        const json=await data.json()
        setCounterViews(json)
        
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        
        <div className="counter-views">
           <i className="fas fa-eye iconViews"><span>{counterViews.views}</span></i>
           
        </div>
    )
}

export default CountViews
