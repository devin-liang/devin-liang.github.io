import React from 'react'
import "./projects.scss"

/*export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <ul>
        <li className='active'>Legend of Zelda Recreation</li>
        <li>Waterman</li>
        <li>Illuminate</li>
        <li>Portfolio Website</li>
      </ul>
    </div>
  )
}*/

class Projects extends React.Component {
  render() {
    return (
      <div className='projects' id='projects'>
        <h1>Projects</h1>
        <ul>
          <li className='active'>Legend of Zelda Recreation</li>
          <li>Waterman</li>
          <li>Illuminate</li>
          <li>Portfolio Website</li>
        </ul>
      </div>
    )
  }
}

export default Projects;
