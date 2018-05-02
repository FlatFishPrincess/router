import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import * as WinesService from '../services/Wines';
import {Component} from 'react'
import Loader from './Loader'
import {Regions} from './Regions'

export default class RegionsPage extends Component {
  
    state = {
      loading: false,
      regions: [],
    };
  
    componentDidMount() {
      this.setState({ loading: true }, () => {
        WinesService.fetchRegions().then(regions => {
          this.setState({
            loading: false,
            regions,
          });
        });
      });
    }
  
    onSelectRegion = (region) => {
      console.log(this.props)
       this.props.history.push({
        pathname: `/regions/${region}`
      });
    };
  
    render() {
      if (this.state.loading) {
        return <div className="center-align"><Loader /></div>
      }
      return (
        <Regions
          onSelectRegion={this.onSelectRegion}
          regions={this.state.regions}
          region={{}} />
      );
    }
  }
  