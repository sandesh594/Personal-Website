import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({name,image,id}) => {

const navigate=useNavigate();

const projectItem = {
  border:'2px solid green',
  borderRadius:'10px',
}


  return (
    <div className='projectItem' >
        <div style={{backgroundImage:`url(${image})`}} className='bgImage' />
        <h1 >{name}</h1>
        <button style={projectItem}  onClick={()=>{
        navigate('/project/'+id)
        }}>Project Details of {name}</button>
    </div>
  )
}

export default ProjectItem