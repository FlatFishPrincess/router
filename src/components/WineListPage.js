import React from 'react'
import {Component} from 'react'
import * as WinesService from '../services/Wines';

export default class WineListPage extends Component {

  state = {
    loading: false,
    wines: [],
  };

  componentDidMount() {
    this.setState({ loading: true }, 
      console.log(this.props.match.params.regionId),
      () => {
      WinesService.fetchWinesFrom(this.props.match.params.regionId).then(wines => {
        this.setState({
          loading: false,
          wines,
        });
      });
    });
  }

    render() {
      return (
        <div>Wines</div>,
        <p>Region identifier is {this.props.match.params.regionId}</p>
      )
    }
  }
  