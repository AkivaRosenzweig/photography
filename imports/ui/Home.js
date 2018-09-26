import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Home extends Component {

  render () {
    return (
      <React.Fragment>

        <div className="titles">
          <div id = "photoTarget" className="parallax-skogafoss mySlides fade">
            <h1 className="big-font no-margin"> See the world through a new lens.</h1>
            <h2 className="medium-font no-margin"> Welcome to my gallery. </h2>
            <h3 className="small-font no-margin"> Akiva Rosenzweig </h3>
            <div>
              <a className="prev" onClick={plusSlides(-1)}>left</a>
              <a className="next" onClick={plusSlides(1)}>right</a>
            </div>
          </div>

        </div>

        <button type="button" className="transparent-button">&darr;</button>

        <div className="bottom">
          <h3 className="no-margin">Gallery</h3>
          <p> Tap each category and explore.</p>
        </div>

        <div id = "slides">
          <div className="parallax-skogafoss" />
          <div className="parallax-flowers" />
        </div>

      </React.Fragment>

    )
  }
}
