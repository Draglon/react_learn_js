import React, { Component } from 'react';
import { dec, inc } from 'ramda';

import GeneratorsComponent from './component';

class GeneratorsContainer extends Component {
  state = {
    calendar: [],
    year: 2022,
    month: 1,
    from: 1,
  }

  get daysInMonth() {
    const { year, month } = this.state;

    return 32 - new Date(year, month, 32).getDate();
  }

  componentDidMount() {
    this.showMonth(); 
  }

  getCalendar = (from, to) => ({
    from,
    to,
  
    *[Symbol.iterator]() {
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  });

  showMonth = () => {
    const { from } = this.state;
    const to = this.daysInMonth;

    this.setState({ calendar: [...this.getCalendar(from, to)] });
  }

  getPrevMonth(month) {
    let { year } = this.state;

    if (month < 0) {
      this.setState({ month: 11, year: dec(year) });
    } else {
      this.setState({ month });
    }
  }

  getNextMonth = (month) => {
    let { year } = this.state;

    if (month > 11) {
      this.setState({ month: 0, year: inc(year) });
    } else {
      this.setState({ month });
    }
  }

  handlePrevMonth = () => {
    this.getPrevMonth(--this.state.month);
    this.showMonth();
  }

  handleNextMonth = () => {
    this.getNextMonth(++this.state.month);
    this.showMonth();
  }

  render() {
    return (
      <GeneratorsComponent
        {...this.props}
        {...this.state}
        onPrevMonth={this.handlePrevMonth}
        onNextMonth={this.handleNextMonth}
      />
    );
  }
}

export default GeneratorsContainer;
