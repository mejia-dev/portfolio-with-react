import React from 'react';
import PropTypes from 'prop-types';
import ProjectSpotlight from './ProjectSpotlight';

export default function ProjectsList(props) {
  return (
    <React.Fragment>
      <div className="projectSpotlight-Wrapper">
        {Object.values(props.projectList).map((project, index) =>
          <ProjectSpotlight
            title={project.title}
            desc={project.desc}
            linkRepo={project.linkRepo}
            linkPages={project.linkPages}
            techsUsed={project.techsUsed}
            features={project.features}
            coAuthors={project.coAuthors}
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