import React from 'react'
import "./projects.scss"
import ProjectCard from '../projectCard/ProjectCard';

const data = [
  {
    id: 1,
    title: 'Legend of Zelda Recreation',
    description: 'Recreation of the Legend of Zelda for NES using Unity',
    links: [
      {
        link: 'link',
        link_text: 'Try it out!'
      }
    ]
  },
  {
    id: 2,
    title: 'Hydroman',
    description: 'Solo game project',
    links: [
      {
        link: 'link',
        link_text: 'Try it out!'
      }
    ]
  },
  {
    id: 3,
    title: 'Illuminate',
    description: '2D Puzzle Platformer',
    links: [
      {
        link: 'link',
        link_text: 'Check it out on Itch.io',
      }
    ]
  }
];

class Projects extends React.Component {
  render() {
    return (
      <div className='projects' id='projects'>
        <h1>Projects</h1>
        <div className="container">
          {data.map((project) => (
            <ProjectCard 
              id={project.id}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Projects;
