import React from "react";
import {Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Exp from "./Pages/Exp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './styles/App.css'
import ProjectDisplay from "./Pages/ProjectDisplay";
 



const App=()=>{
    return(
        <div className="App">
            
                                                                       
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDisplay />} />
                <Route path='Exp' element={<Exp />}/>
            </Routes>
           <Footer />
            
        </div>
    )
}

export default App