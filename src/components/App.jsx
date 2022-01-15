import React from 'react'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Projects from './Pages/Projects'
import AboutMe from './Pages/AboutMe'
import ContactMe from './Pages/ContactMe'
import ProjectDetails from './Pages/ProjectDetails'
import './globalStyles.css'
import Footer from './Footer/Footer'
import Blog from './Pages/Blog'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects/>} exact/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="/contact-me" element={<ContactMe/>}/>
                <Route path="/project/:id" element={<ProjectDetails/>}/>
                <Route path="/blog" element={<Blog/>}/>
                {/* <Route path="/blog/:id" element={}/> */}
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App