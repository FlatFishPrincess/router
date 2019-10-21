import React, { Component } from 'react';
import { Regions, WineList, Wine, CommentModal } from '.';
import * as WinesService from '../services/Wines';
import RegionsPage from './RegionsPage';

const host = 'https://wines-api.herokuapp.com';

export class WineApp extends Component {
  state = {
    commentModalOpen: false,
    regions: [],
    selectedRegion: null,
    wines: [],
    selectedWine: null,
  };

  componentDidMount() {
    WinesService.fetchRegions().then(regions => {
      this.setState(
        {
          regions,
          selectedRegion: regions[0],
        },
        () => {console.log(this.state.regions)},
        () => {
          WinesService.fetchWinesFrom(this.state.selectedRegion).then(wines => {
            this.setState({
              wines,
              selectedWine: wines[0],
            });
          });
        }
      );
    });
  }

  closeCommentModal = () => {
    this.setState({ commentModalOpen: false });
  };

  openCommentModal = () => {
    this.setState({ commentModalOpen: true });
  };

  onSelectRegion = region => {
    WinesService.fetchWinesFrom(region).then(wines => {
      this.setState({ selectedRegion: region, wines, selectedWine: wines[0] });
    });
  };

  onSelectWine = id => {
    WinesService.fetchWine(id).then(wine => {
      this.setState({ selectedWine: wine });
    });
  };

  goBack = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.history.goBack();
  }

   goHome = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/"
    });
  };

  render() {
    const displayButton = window.location.pathname !== '/';

    return (
      <div>
        <h1 className="center-align">Open Wine Database</h1>
        <div className="center-align">
          You can read the Wines API documentation at <a href="https://bit.ly/rbw-api" target="_blank">https://wines-api.herokuapp.com</a> and try it <a href="https://bit.ly/rbw-api-swag" target="_blank">here</a>
        </div>
        {displayButton && (<div className="center-align" style={{ marginTop: 20 }}>
          <button className="btn waves-effect waves-light" onClick={this.goBack} type="button">
            <i className="material-icons left">fast_rewind</i>
            Back
          </button>
          <button className="btn waves-effect waves-light" style={{ marginLeft: 10 }} onClick={this.goHome} type="button">
            <i className="material-icons left">home</i>
            Home
          </button>
        </div>)}
      </div>
    );
  }
}
