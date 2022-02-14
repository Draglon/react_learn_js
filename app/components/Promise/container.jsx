import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PromisesComponent from './component';

class PromisesContainer extends Component {
  handlePlay = () => {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(() => resolve("done"), 1000)
    })

    promise.then(
      result => alert(result), // выведет "done!" через одну секунду
      error => alert(error) // не будет запущена
    );
  };

  render() {
    return (
      <PromisesComponent
        {...this.props}
        onPlay={this.handlePlay}
      />
    );
  }
}

export default PromisesContainer;
