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

  showCircle = (cx, cy, radius) => {
    let div = document.getElementById('circle');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }

  handlePlayAnimation = () => {
    this.showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  handlePlayQuery = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000);
    }).then((result) => {
      alert(`результат умножения на 10: ${result}`);
      return result * 10;
    }).then((result) => {
      alert(`результат умножения на 10: ${result}`);
      return result * 10;
    }).then((result) => {
      alert(`результат умножения на 10: ${result}`);
      return result;
    });
  }

  loadScriptPromise = (src) => {
    return new Promise((resolve, reject) => {
      loadScript(src, (err, script) => {
        if (err) reject(err)
        else resolve(script);
      });
    })
  }

  handlePlayPromisify = () => {
    this.loadScriptPromise('path/script.js');
  }

  handlePlayPromiseAll = () => {
    Promise.all([
      new Promise(resolve => setTimeout(() => resolve(1), 3000)),
      new Promise(resolve => setTimeout(() => resolve(2), 2000)),
      new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]).then(alert);
  }

  handlePlayPromiseAllSettled = () => {
    Promise.all([
      new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
      new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
      new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).catch(alert);
  }

  render() {
    return (
      <PromisesComponent
        {...this.props}
        onPlay={this.handlePlay}
        onPlayAnimation={this.handlePlayAnimation}
        onPlayQuery={this.handlePlayQuery}
        onPlayPromisify={this.handlePlayPromisify}
        onPlayPromiseAll={this.handlePlayPromiseAll}
        onPlayPromiseAllSettled={this.handlePlayPromiseAllSettled}
      />
    );
  }
}

export default PromisesContainer;
