import React from 'react';
import Game from './Components/Game';
import StartScreen from './Components/StartScreen';
import CalibrateScreen from "./Components/Calibrate";
import EndScreen from './Components/EndScreen';
import { Switch, Route } from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import Aj from './assets/Aj.fbx';
import will from "./assets/icon.jpg";
import bg from "./assets/skies/bg8.jpg";
import txt from "./assets/skies/tile02.png";
import leftArrow from './assets/arrows/left.png';
import rightArrow from './assets/arrows/right.png';
import upArrow from './assets/arrows/up.png';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      character: null,
      posenet: false,
    }
  }

  onAjLoad = async (object3d) => {
    if(object3d){
      this.setState({character: object3d});
    }
  }

  loadHandler = async () => {
    let CharLoader = new FBXLoader();
    await CharLoader.load(Aj, this.onAjLoad);
  }

  handlePoseNetChange = (value) => {
    this.setState({ ...this.state, posenet: value });
  }

  render(){
    return(
      <Switch>
        <Route path="/" exact>
          {this.state.character?
          <StartScreen Aj={this.state.character} handlePoseNet={this.handlePoseNetChange}/>:
          <CircularProgress style={{position:'absolute', top: '50%', left:'50%'}}>{this.loadHandler()}</CircularProgress>}
        </Route>
        <Route path="/calibrate" exact>
          <CalibrateScreen />
        </Route>
        <Route path="/game" exact>
          {this.state.character?
          <Game player={this.state.character} usePoseNet={this.state.posenet} backGrd={bg} willImg={will} leftA={leftArrow} rightA={rightArrow} jumpA={upArrow} txtr={txt}/>:
          <CircularProgress style={{position:'absolute', top: '50%', left:'50%'}}>{this.loadHandler()}</CircularProgress>}
        </Route>
        <Route path="/over" exact>
          <EndScreen />
        </Route>
      </Switch>
    )
  }
}

export default App;