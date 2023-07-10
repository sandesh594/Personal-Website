import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";
import photo from '../assets/photo.jpeg';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className='home'>


            
        


        <div className='about'>
            <div>

            <img className='about_image'  src={photo} alt='photo' />

            </div>

             <div>
             <h2>Hi, My Name is  Sandesh devadiga</h2>

             </div>
            
            <div className='prompt'>

                <p>Looking for Front-end developer job with passion of learning coding... </p>
                <Link to={'/linkedIn'}>
                <LinkedInIcon />
                </Link>

                <Link to={'email'}>
                <EmailIcon />

                </Link>

                <Link to={'gitHub'}>
                <GitHubIcon />

                </Link>
                
                
               
                 </div>
            
        </div>


        <div className='skills'> 
    
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>HTML5,CSS3,JavaScript,TypeScript,Git & Github,React.js,Tailwind CSS and Redux.</span>

                </li>

                <li className='item'>
                    <h2>Languages</h2>
                    <span>Javascript,Typescript.</span>

                </li>

            </ol>
        </div>

    </div>
  )
}

export default Home
