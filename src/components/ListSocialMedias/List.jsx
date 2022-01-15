import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import './List.css'

function List() {
    return (
        <div className="mySocialMedias">
            <h2>Follow me.</h2>
            <ol>
                <li>
                    <SocialMedia
                    url='https://www.facebook.com/profile.php?id=100044622940765'
                    icon="fab fa-facebook-square"
                    color='white'
                    /> 
                </li>

                <li>
                    <SocialMedia 
                    url='https://www.instagram.com/ridarlar/'
                    icon="fab fa-instagram-square"
                    color='white'
                    /> 
                </li>

                <li>
                    <SocialMedia className='icon icon3'
                    url='https://github.com/RamCode1621'
                    icon="fab fa-github-square"
                    color='white'
                    /> 
                </li>

                <li>
                    <SocialMedia className='icon icon3'
                    url='https://www.linkedin.com/in/richard-aguilar-671bba19a/'
                    icon="fab fa-linkedin"
                    color='white'
                    /> 
                </li>
            </ol>
        </div>
    )
}
// 
export default List
