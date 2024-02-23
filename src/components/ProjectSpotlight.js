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
      Technology: <span style={{
        backgroundColor: `${props.techsUsed.color}`,
        position: "relative",
        top: "1px",
        display: "inline-block",
        width: "12px",
        height: "12px",
        borderRadius: "50%"
      }}></span>
      <span style={{color: `${props.techsUsed.color}`}}> {props.techsUsed.name}</span><br />
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