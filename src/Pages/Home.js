import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";



function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is  Sandesh devadiga</h2>
            <div className='prompt'>
                <p>Looking for front end developer job with passion of learning and creating </p>
                <LinkedInIcon />
                <EmailIcon />
                <GitHubIcon />
                 </div>
            
        </div>
        <div className='skills'> 
    
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>HTML,CSS,Javascript,Typescript,Git and Github,React.js</span>

                </li>

                <li className='item'>
                    <h2>Languages</h2>
                    <span>Javascript,Typescript</span>

                </li>

            </ol>
        </div>

    </div>
  )
}

export default Home
