import React from 'react'
import {Component} from 'react'

export default class WinePage extends Component {
    render() {
      return [
        <div>Wine details</div>,
        <p>Region identifier is {this.props.params.regionId}</p>,
        <p>Wine identifier is {this.props.params.wineId}</p>
      ];
    }
  }