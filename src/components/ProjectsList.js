import React from 'react';
import PropTypes from 'prop-types';
import ProjectSpotlight from './ProjectSpotlight';

export default function ProjectsList(props) {
  return (
    <React.Fragment>
      <div className="projectSpotlight-Wrapper">
        {Object.values(props.projectList).map((project, index) =>
          <ProjectSpotlight
            title={project.name}
            desc={project.description}
            linkRepo={project.repo}
            // linkPages={project.linkPages}
            techsUsed={project.language}
            stars={project.stars}
            forks={project.forks}
            key={index}
          />
        )}
      </div>
    </React.Fragment>
  )
}

ProjectsList.propTypes = {
  projectList: PropTypes.array
}