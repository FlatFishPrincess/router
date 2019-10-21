import React from 'react'
import { Component } from 'react'
import { WineList } from './WineList';
import * as WinesService from '../services/Wines';

export default class WineListPage extends Component {

  state = {
    loading: false,
    wines: [],
  };

  componentDidMount() {
    this.setState({ loading: true }, 
      () => {
      WinesService.fetchWinesFrom(this.props.match.params.regionId).then(wines => {
        this.setState({
          loading: false,
          wines,
        });
      });
    });
  }

  onSelectWine = (wine) => {
     this.props.history.push({
      pathname: `${this.props.location.pathname}/wines/${wine}`
    });
  };

    render() {
      return (
        <WineList
          onSelectWine = {this.onSelectWine}
          wines={this.state.wines}
        />
      )
    }
  }
  