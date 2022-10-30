import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHub from '@mui/icons-material/GitHub'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const {id}=useParams()
    const projec=ProjectList[id]

  return (
    <div className='project'>
        <h1>{projec.name}</h1>
        <img src={projec.image}  />
        <p>
            <b>Skills:</b>{projec.skills}
        </p>
        <GitHub />
        

    </div>
  )
}

export default ProjectDisplay