import React from 'react';
import './App.css';



class Homework extends React.Component {
  formatName() {
    return this.props.user.firstName + " " + this.props.user.lastName; //img it is not working
  }
  render() {
    return (
      <div id="result">
        <img src={this.props.user.avatarUrl} alt={this.formatName()} />
        <h1>Hello, {this.formatName()}!</h1>;
      </div>
    );
  }
}

export default Homework;


