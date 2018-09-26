import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };

    // This binding is necessary to make `this` work in the callback
    this.plusSlide = this.plusSlide.bind(this);
    this.minusSlide = this.minusSlide.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }

  render () {
    return (
      <React.Fragment>

        <div className="titles">
          <div id = "photoTarget" className="parallax-skogafoss mySlides fade">
            <h1 className="big-font no-margin"> See the world through a new lens.</h1>
            <h2 className="medium-font no-margin"> Welcome to my gallery. </h2>
            <h3 className="small-font no-margin"> Akiva Rosenzweig </h3>
            <h3 className="small-font no-margin">
              <a className="prev" onClick={this.minusSlide}>&larr;</a>
              <a className="next" onClick={this.plusSlide}>&rarr;</a>
            </h3>
          </div>

        </div>

        <button type="button" className="transparent-button">&darr;</button>

        <div className="bottom">
          <h3 className="no-margin">Gallery</h3>
          <p> Tap each category and explore.</p>
        </div>

      </React.Fragment>

    )
  }

  plusSlide() {
    this.state.slideIndex += 1;
    this.showSlides();
  }

  minusSlide() {
    this.state.slideIndex -= 1;
    this.showSlides();
  }

  showSlides() {
    var i;
    var slideNames = [];
    slideNames.push('parallax-skogafoss');
    slideNames.push('parallax-flowers');

    if (this.state.slideIndex > slideNames.length - 1) {
      this.state.slideIndex = slideNames.length - 1;
    }
    if (this.state.slideIndex < 0) {
      this.state.slideIndex = 0;
    }

    var desiredClass = slideNames[this.state.slideIndex];
    var target = document.getElementById("photoTarget");
    target.className = desiredClass + "  mySlides fade";
  }


}
