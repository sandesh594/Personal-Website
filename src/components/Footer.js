import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';




function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>

          <Link to={'#'}>
          <InstagramIcon />

          </Link>

          <Link to={'#'}>
          <TwitterIcon />
            
          </Link>

          <Link to={'#'}>
          <FacebookIcon />
            
          </Link>

          <Link to={'#'}>
          <LinkedInIcon />
            
          </Link>
        
          

          
          
         

        </div>
        <p> &copy; 2022 sandeshdevadiga03@gmail.com</p>
      
        
        </div>
  )
}

export default Footer