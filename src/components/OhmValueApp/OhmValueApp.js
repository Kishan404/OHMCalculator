import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/resister.svg';
import './OhmApp.css';
import OhmValueCalculator from '../../OhmValueCalculator';
import ColorBands from '../ColorBands/ColorBands';


class OhmValueApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstDigitColor: props.firstDigitColor,
            secondDigitColor: props.secondDigitColor,
            multiplierColor: props.multiplierColor,
            toleranceColor: props.toleranceColor,
            resistance: props.resistance,
            tolerance: props.tolerance,
        };
        this.handleColorPick = this.handleColorPick.bind(this);
    }

componentDidMount() {

    let ohmcal = new OhmValueCalculator();
    let result = ohmcal.calculateOhmValue(this.props.firstDigitColor,this.props.secondDigitColor,this.props.multiplierColor,this.props.toleranceColor);
    console.log(result);
    this.setState(() => {
        return {
            resistance: result.Ohm,
            tolerance: result.tolerance,
        }
    });

}    
handleColorPick(newcolor,bandType) {

    this.setState(()=> {
        return {
            [bandType]: newcolor
        }
    });

    let ohmcal = new OhmValueCalculator();
    
    debugger;
    this.setState((prevState)=> {
        let result = ohmcal.calculateOhmValue(prevState.firstDigitColor,prevState.secondDigitColor,prevState.multiplierColor,prevState.toleranceColor);
       return {
            resistance: result.Ohm,
            tolerance: result.tolerance
        }
    });

  }


  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
              
        </header>
        <h1 className="App-title">{this.props.hearder}</h1>
        
        <p className="App-intro">
          {this.props.subTitle}
          <br />
          Please select colors bands to calculate resitance value. Use the matching image pattern of your resister for correct input colors selection.  
        </p>
        <br/>
        <div>
          <div><ColorBands 
                bandsList = {this.props.bandsList}
                handleColorPick = {this.handleColorPick}
                /></div>
          <div></div>
        </div>

        <p><b>Resistance : {(this.state.resistance+' Ohm '+(this.state.tolerance ? '± '+this.state.tolerance+'%':''))} </b></p>
        
      </div>
    );
  }
}

OhmValueApp.propTypes = {
    bandsList: PropTypes.array,
    hearder : PropTypes.string,
    subTitle : PropTypes.string,
    firstDigitColor: PropTypes.string,
    secondDigitColor: PropTypes.string,
    multiplierColor: PropTypes.string,
    toleranceColor: PropTypes.string,
};

export default OhmValueApp;
