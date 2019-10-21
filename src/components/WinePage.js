import React from 'react'
import {Component} from 'react'
import * as WinesService from '../services/Wines';
import {Wine} from './Wine';
import Loader from './Loader';

export default class WinePage extends Component {
  state = {
    loading: false,
    wine: {}
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      WinesService.fetchWine(this.props.match.params.wineId).then(wine => {
        console.log('fetched wine?', wine);
        this.setState({
          loading: false,
          wine,
        });
      });
    });
  }

  render() {
    if (this.state.loading || !this.state.wine) {
      return <div className="center-align"><Loader /></div>
    } 
    return (
      <Wine wine={this.state.wine} host={WinesService.host}/>
    );
  }
}