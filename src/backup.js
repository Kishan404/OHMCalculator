import React, { Component } from 'react';
import logo from './Resistor_Carbon-film_0.25W_Coloured.svg';
import './OhmApp.css';
import OhmValueCalculator from './OhmValueCalculator';
import ColorBand from './ColorBand';
import ColorBands from './ColorBands';




class OhmValueApp1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bandAdata: props.bandAdata,
            bandBdata: props.bandBdata,
            bandCdata: props.bandCdata,
            bandDdata: props.bandDdata,
            bandA: props.bandA,
            bandB: props.bandB,
            bandC: props.bandC,
            bandD: props.bandD,
            bandInfo : props.bandInfo,
            resistance: props.resistance,
            tolerance: props.tolerance,
        };

        const data = require('./colorcodes.json');
  const colorcodemeta = data.metadata;
  const bandInfo = data.bandInfo
    this.setState(() => {
       return {
            header : data.header,
            subtitle : data.subtitle,
            bandInfo: bandInfo,
            bandAdata: Object.keys(colorcodemeta.firstDigit),
            bandBdata: Object.keys(colorcodemeta.secondDigit),
            bandCdata: Object.keys(colorcodemeta.multiplier),
            bandDdata: Object.keys(colorcodemeta.tolerance),
            firstDigitColor: Object.keys(colorcodemeta.firstDigit)[0],
            secondDigitColor: Object.keys(colorcodemeta.secondDigit)[0],
            multiplierColor: Object.keys(colorcodemeta.multiplier)[0],
            toleranceColor: Object.keys(colorcodemeta.tolerance)[0],
            colorcodemeta
        }
    })
this.setState((prevState) => {
        let ohmcal = new OhmValueCalculator();
        let result = ohmcal.calculateOhmValue(prevState.firstDigitColor,prevState.secondDigitColor,prevState.multiplierColor,prevState.toleranceColor,prevState.colorcodemeta);
        debugger;
        return {
        resistance: result.Ohm,
        tolerance: result.tolerance,
        }
    })





       
        this.updateBandColor = this.updateBandColor.bind(this);
    }

componentDidMount() {

    
}    
  updateBandColor(newcolor,bandType) {

    this.setState(()=> {
       return {
            [bandType]: newcolor
        }
    });
    debugger;
    let ohmcal = new OhmValueCalculator();

    this.setState((prevState)=> {
       let result = ohmcal.calculateOhmValue(prevState.firstDigitColor,prevState.secondDigitColor,prevState.multiplierColor,prevState.toleranceColor,prevState.colorcodemeta);
       //debugger;
       return {
            resistance: result.Ohm,
            tolerance: result.tolerance
        }
    });

  }

  render() {
    // if(!this.state.bandInfo) {
    //   return null;
    // }
    
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
              
        </header>
        <h1 className="App-title">{this.state.header}</h1>
        
        <p className="App-intro">
          {/*{this.state.subtitle.text}*/}
          <br />
          Please select colors bands to calculate resitance value. Use the matching image pattern of your resister for correct input colors selection.  
        </p>
        <br/>
        <div>
          {/*<div><ColorBands bandInfo={this.state.bandInfo} inputdata={this.state.colorcodemeta} /></div>*/}
          <div></div>
        </div>

        <ColorBand 
            bandtype = {this.state.bandInfo.firstband.bandtype}
            bandlable = {this.state.bandInfo.firstband.bandlable} 
            
            //bandtype = {this.state.bandInfo && this.state.bandInfo.firstband.bandtype}
            //bandlable = {this.state.bandInfo && this.state.bandInfo.firstband.bandlable}
            bandOptions = {this.state.bandAdata}
            pickColor = {this.updateBandColor} 
        />
        <br/>
        <ColorBand 
            //bandtype = {this.state.bandInfo && this.state.bandInfo.secondband.bandtype} 
            //bandlable = {this.state.bandInfo && this.state.bandInfo.secondband.bandlable}
            bandtype = {this.state.bandInfo.secondband.bandtype}
            bandlable = {this.state.bandInfo.secondband.bandlable} 
            bandOptions = {this.state.bandBdata}
            pickColor = {this.updateBandColor} 
        />
        <br/>
        <ColorBand 
            //bandtype = {this.state.bandInfo && this.state.bandInfo.multiplierband.bandtype} 
            //bandlable = {this.state.bandInfo && this.state.bandInfo.multiplierband.bandlable}
            bandtype = {this.state.bandInfo.multiplierband.bandtype} 
            bandlable = {this.state.bandInfo.multiplierband.bandlable}

            bandOptions = {this.state.bandCdata}
            pickColor = {this.updateBandColor} 
        />
        <br/>
        <ColorBand 
            //bandtype = {this.state.bandInfo && this.state.bandInfo.toleranceband.bandtype} 
            //bandlable = {this.state.bandInfo && this.state.bandInfo.toleranceband.bandlable}
            bandtype = {this.state.bandInfo.toleranceband.bandtype} 
            bandlable = {this.state.bandInfo.toleranceband.bandlable}

            bandOptions = {this.state.bandDdata}
            pickColor = {this.updateBandColor} 
        />
        <p><b>Resistance : {(this.state.resistance+' Ohm '+(this.state.tolerance ? '± '+this.state.tolerance+'%':''))} </b></p>
        
      </div>
    );
  }
}

export default OhmValueApp1;
