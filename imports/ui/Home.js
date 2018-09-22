import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Home extends Component {

  render () {
    return (
      <React.Fragment>

        <div className="titles parallax">
          <header>
            <h1 className="big-font no-margin"> See the world through a new lense.</h1>
            <h2 className="medium-font no-margin"> Welcome to my gallery. </h2>
            <h3 className="small-font no-margin"> Akiva Rosenzweig </h3>
            <button className="transparent-button">&darr;</button>
          </header>

        </div>



        <div className="bottom">
          <h3 className="no-margin">Travel</h3>
          <p> I love taking photos when I travel because places far
          away from home are always interesting and new.</p>
        </div>

      </React.Fragment>

    )
  }
}
