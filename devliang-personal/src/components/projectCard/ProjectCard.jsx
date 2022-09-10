import { ConstructionRounded } from '@mui/icons-material'
import React from 'react'
import './projectCard.scss'

// One card describing a project on the project section
class ProjectCard extends React.Component {
    render() {
        return (
            <div className="card" key={this.props.id}>
              <div className="top">
                <h3>{this.props.title}</h3>
              </div>
              <div className="middle">
                <p>
                  {this.props.description}
                </p>
              </div>
              <div className="bottom">
                {this.props.links.map((item) => (
                  <a href={item.link}>{item.link_text}</a>
                ))}
            </div>
          </div>
        )
    }
}

export default ProjectCard;