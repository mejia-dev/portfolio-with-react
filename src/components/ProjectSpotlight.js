import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectSpotlight(props) {

  let pagesLink;
  let starsCount;
  let forksCount;

  if (props.linkPages) {
    pagesLink = <p className="pagesLink">GH Pages Link: <a href={props.linkPages}>{props.linkPages.slice(8)}</a></p>
  }
  if (props.stars >= 1) {
    starsCount = (
      <span>Stars: ⭐{props.stars}</span>
    )
      // <React.Fragment>
      //   <h3>Co-Authors:</h3>
      //   <ul>
      //     {props.coAuthors.map((author, index) =>
      //       <li key={index}><a href={author}>{author.slice(19)}</a></li>
      //     )}
      //   </ul>
      // </React.Fragment>
  }
  if (props.forks >= 1) {
    forksCount = (
      <span>🍴 {props.forks}</span>
    )
  }

  return (
    <div className="projectSpotlight-Project">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p className="repoLink">GitHub Link: <a href={props.linkRepo} target="_blank" rel="noreferrer">{props.linkRepo.slice(8)}</a></p>
      {pagesLink}
      {/* <h3>Primary Technology: </h3> */}
      {/* <ol>
        {Object.values(props.techsUsed).map((tech, color) =>
          <li >{tech}</li>
        )}
      </ol> */}

      {/* <h3>Details:</h3> */}
      {/* <ul>
        {props.features.map((feature, index) =>
          <li key={index}>{feature}</li>
        )}
      </ul> */}
      Technology: <span style={{color: `${props.techsUsed.color}`}}><svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" fill={props.techsUsed.color} />
</svg>{props.techsUsed.name}</span><br />
      {starsCount}<br />
      {forksCount}<br />
    </div>
  )
}

ProjectSpotlight.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  linkRepo: PropTypes.string,
  linkPages: PropTypes.string,
  techsUsed: PropTypes.object,
  stars: PropTypes.number,
  forks: PropTypes.number
}