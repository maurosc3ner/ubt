import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import EEGPlayer from './components/EEGPlayer';
import './App.css';

class UBTApp extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="bottom">
          <EEGPlayer width="200" channels="6"></EEGPlayer>
        </div>

        <Button variant="raised" color="primary">
          Happy Coding!
        </Button>
      </div>
    );
  }
}

export default UBTApp;
