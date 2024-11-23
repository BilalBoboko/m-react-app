import React from 'react'
import ProjectComponent from '../componenst/Project/Project'
import Project01 from '../componenst/Project/Project01';

const Project = () => {
  return (
    <div>
        <main className="section">
          <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <ProjectComponent/>
                <Project01/>
            </ul>
          </div>
        </main>z

      
      
    </div>
  )
}

export default Project;
