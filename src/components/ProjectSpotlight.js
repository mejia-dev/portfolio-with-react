import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectSpotlight(props) {

  let pagesLink;
  let coAuthorList;
  if (props.linkPages) {
    pagesLink = <p className="pagesLink">GH Pages Link: <a href={props.linkPages}>{props.linkPages.slice(8)}</a></p>
  }
  if (props.coAuthors) {
    coAuthorList =
      <React.Fragment>
        <h3>Co-Authors:</h3>
        <ul>
          {props.coAuthors.map((author, index) =>
            <li key={index}><a href={author}>{author.slice(19)}</a></li>
          )}
        </ul>
      </React.Fragment>
  }

  return (
    <div className="projectSpotlight-Project">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p className="repoLink">GitHub Link: <a href={props.linkRepo} target="_blank" rel="noreferrer">{props.linkRepo.slice(8)}</a></p>
      {pagesLink}
      <h3>Technologies Used:</h3>
      {/* <ol>
        {props.techsUsed.map((tech, index) =>
          <li key={props.title + tech + index}>{tech}</li>
        )}
      </ol> */}
      <h3>Features:</h3>
      {/* <ul>
        {props.features.map((feature, index) =>
          <li key={index}>{feature}</li>
        )}
      </ul> */}
      {coAuthorList}
    </div>
  )
}

ProjectSpotlight.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  linkRepo: PropTypes.string,
  linkPages: PropTypes.string,
  techsUsed: PropTypes.array,
  features: PropTypes.array,
  coAuthors: PropTypes.array
}