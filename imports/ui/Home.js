import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Home extends Component {

  render () {
    return (

        <div className="titles">
          <header>
            <h1 className="big-font small-margin"> See the world through a {"new"} lense.</h1>
            <h2 className="medium-font small-margin"> Welcome to my gallery. </h2>
            <h3 className="small-font small-margin"> Akiva Rosenzweig </h3>
          </header>
          <button className="transparent-button">&darr;</button>
        </div>


    )
  }
}
