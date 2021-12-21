import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Projects from './Pages/Projects'
import AboutMe from './Pages/AboutMe'
import ContactMe from './Pages/ContactMe'
import ProjectDetails from './Pages/ProjectDetails'
import './globalStyles.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects/>} exact/>
                <Route path="about-me" element={<AboutMe/>}/>
                <Route path="contact-me" element={<ContactMe/>}/>
                <Route path="/project/:id" element={<ProjectDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App