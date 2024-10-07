import spinner from "../assets/spinner.gif";
import { Component } from 'react';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinner} alt="loading" width="50px"/>
      </div>
    )
  }
}

export default Spinner