import React from 'react';
import PropTypes from 'prop-types'


class Counter extends React.Component {

static defaultProps = {
    maxValue: 10
}

static propTypes = {
    maxValue: PropTypes.number
}

    state = {counter: 0}

handleInClick = () => {
    if(this.state.counter < this.props.maxValue){
        this.setState({
            counter: this.state.counter + 1
    })
  }
}

handleDeClick = () =>{
  this.setState({
    counter: this.state.counter -1
  })
}

  render() {
    return (
      <div>
        <div>
          Your count is: {this.state.counter}, max is {this.props.maxValue}
        </div>
        <button type="button" onClick={this.handleInClick}>Plus BUTTON!!!</button>
        <button type="button" onClick={this.handleDeClick}>Minus BUTTON!!!</button>
      </div>
    );
  }
}


export default Counter;
