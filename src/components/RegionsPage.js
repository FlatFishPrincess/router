import React from 'react'
import { withRouter } from 'react-router'
import * as WinesService from '../services/Wines';
import {Component} from 'react'
import Loader from './Loader'
import {Regions} from './Regions'

class RegionsPage extends Component {
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
      console.log(region, 'region', this.props);
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

export default withRouter(RegionsPage);