import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ProjectSpotlight(props) {

  // const [ghPagesLinkLoaded, setGhPagesLinkLoaded] = useState(false);
  const [ghPagesLink, setGhPagesLink] = useState(null);
  const [forksCount, setForksCount] = useState(null);
  const [ghPagesLinkError, setGhPagesLinkError] = useState(null);
  const [forksCountError, setForksCountError] = useState(null);

  let pagesLink;
  let starsCount;
  let forksDisplay;

  useEffect(() => {
    fetch("https://api.github.com/repos/mejia-dev/" + props.title + "/branches/gh-pages")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonObj) => {
        setGhPagesLink("https://mejia-dev.github.io/" + props.title);
        // setGhPagesLinkLoaded(true);
      })
      .catch((error) => {
        setGhPagesLinkError(error);
        // setGhPagesLinkLoaded(true);
      });

    fetch("https://api.github.com/repos/mejia-dev/" + props.title + "/forks")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonObj) => {
        console.log(jsonObj);
        if (jsonObj.response.length >= 1)
        {
          console.log(props.title + "has forks")
          setForksCount(jsonObj.response.length);
        }
      })
      .catch((error) => {
        setForksCountError(error.message);
      });
  }, [])

  if (ghPagesLink != null) {
    pagesLink = (
      <p className="pagesLink">Live Link: <a href={ghPagesLink} target="_blank" rel="noreferrer">{ghPagesLink.slice(8)}</a></p>
    )
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
  if (forksCount != null) {
    forksDisplay = (
      <span>Forks: {forksCount}</span>
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
      <span style={{ color: `${props.techsUsed.color}` }}> {props.techsUsed.name}</span><br />
      {starsCount}<br />
      {forksDisplay}<br />
    </div>
  )
}

ProjectSpotlight.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  linkRepo: PropTypes.string,
  techsUsed: PropTypes.object,
  stars: PropTypes.number
  // forks: PropTypes.number
}