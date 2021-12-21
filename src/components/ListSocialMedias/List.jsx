import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import './List.css'

function List() {
    return (
        <div className="mySocialMedias">
            <h2>Follow me.</h2>
            <div>
            <SocialMedia
            url='https://www.facebook.com/profile.php?id=100044622940765'
            icon="fab fa-facebook-square"
            color='white'
            /> 
            <SocialMedia 
            url='https://www.instagram.com/ridarlar/'
            icon="fab fa-instagram-square"
            color='white'
            />   
            <SocialMedia className='icon icon3'
            url='https://github.com/RamCode1621'
            icon="fab fa-github-square"
            color='white'
            /> 
            </div>
        </div>
    )
}

export default List
