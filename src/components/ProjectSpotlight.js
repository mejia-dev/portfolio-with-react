import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectSpotlight() {
  
  let pagesLink;
  if (props.linkPages) {
    pagesLink = <p className="pagesLink">GH Pages Link: <a href={props.linkPages}>{props.linkPages.slice(8)}</a></p>
  }

  return (
    <div className="projectSpotlight-Project">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p className="repoLink">GitHub Link: <a href={props.linkRepo}>{props.linkRepo.slice(8)}</a></p>
      {pagesLink}
      <h3>Languages Used:</h3>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
      <h3>Features:</h3>
      <ul>
        <li>Home/Blog Page</li>
        <li>About Page</li>
        <li>Floated images on the About page</li>
      </ul>
      <h3>Authors:</h3>
      <ul>
        <li><a href="https://github.com/mejia-dev">mejia-dev (me)</a></li>
        <li><a href="https://github.com/daisyorozcob">daisyorozcob</a></li>
      </ul>
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
  authors: PropTypes.object
}