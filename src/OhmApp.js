import React, { Component } from 'react';
import logo from './Resistor_Carbon-film_0.25W_Coloured.svg';
import './OhmApp.css';
import OhmValueCalculator from './OhmValueCalculator';
import ColorBand from './ColorBand';

class OhmApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bandA: undefined,
            bandB: undefined,
            bandC: undefined,
            bandD: undefined,
            resistance: undefined,
            tolerance: undefined,
        };
        this.updateBandA = this.updateBandA.bind(this);
        this.updateBandB = this.updateBandB.bind(this);
        this.updateBandC = this.updateBandC.bind(this);
        this.updateBandD = this.updateBandD.bind(this);
        this.updateBandColor = this.updateBandColor.bind(this);
    }

// OhmValueCalculator.calculateOhmValue('Red','Red','Orange')
  GetOhmValue() {
    let ohmcal = new OhmValueCalculator();
    let result = ohmcal.calculateOhmValue('Red','Red','Orange','Gold');
    return (result.Ohm+' Ohm '+(result.tolerance ? '+/- '+result.tolerance: ''));  
  }

  updateBandColor(newcolor,bandType) {

    this.setState(()=>{
       return {
            [bandType]: newcolor
        }
    });
    let ohmcal = new OhmValueCalculator();

    this.setState((prevState)=> {
       let result = ohmcal.calculateOhmValue(prevState.bandA,prevState.bandB,prevState.bandC,prevState.bandD);
       debugger;
       return {
            resistance: result.Ohm,
            tolerance: result.tolerance
        }
    });

  }

  updateBandA(newcolor,bandType) {
    let ohmcal = new OhmValueCalculator();
    let result = ohmcal.calculateOhmValue(newcolor,this.state.bandB,this.state.bandC,this.state.bandD);
    let resistance = result.Ohm;
    let tolerance = result.tolerance;
    this.setState(()=>{
       return {
            bandA: newcolor,
            resistance,
            tolerance
        }
    });
  }

  updateBandB(newcolor,bandType) {
    let ohmcal = new OhmValueCalculator();
    let result = ohmcal.calculateOhmValue(this.state.bandA,newcolor,this.state.bandC,this.state.bandD);
    let resistance = result.Ohm;
    let tolerance = result.tolerance;
    this.setState(()=>{
       return {
            bandB: newcolor,
            resistance,
            tolerance
        }
    });
  }

  updateBandC(newcolor,bandType) {
    let ohmcal = new OhmValueCalculator();
    let result = ohmcal.calculateOhmValue(this.state.bandA,this.state.bandB,newcolor,this.state.bandD);
    let resistance = result.Ohm;
    let tolerance = result.tolerance;
    this.setState(()=>{
       return {
            bandC: newcolor,
            resistance,
            tolerance
        }
    });
  }

  updateBandD(newcolor,bandType) {
      debugger;
    let ohmcal = new OhmValueCalculator();
    let result = ohmcal.calculateOhmValue(this.state.bandA,this.state.bandB,this.state.bandC,newcolor);
    let resistance = result.Ohm;
    let tolerance = result.tolerance;
    this.setState(()=>{
       return {
            bandD: newcolor,
            resistance,
            tolerance
        }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <h1 className="App-title">Here you can Calculate Ohm of any resister</h1>
        <p className="App-intro">
          Please select colors bands to calculate resitance value. Use the matching image pattern of your resister for correct input colors selection.  
        </p>
        <ColorBand 
            bandtype = {'bandA'} 
            bandlable = {'Band A color:'}
            bandOptions = {['Black','Brown','Red','Orange','Yellow','Green','Blue','Violet','Gray','White']}
            default = {'Yellow'}
            pickColor = {this.updateBandColor} 
        />
        <ColorBand 
            bandtype = {'bandB'} 
            bandlable = {'Band B color:'}
            bandOptions = {['Black','Brown','Red','Orange','Yellow','Green','Blue','Violet','Gray','White']}
            default = {'Red'}
            pickColor = {this.updateBandColor} 
        />
        <ColorBand 
            bandtype = {'bandC'} 
            bandlable = {'Band C color:'}
            bandOptions = {['Pink','Silver','Gold','Black','Brown','Red','Orange','Yellow','Green','Blue','Violet','Gray','White']}
            default = {'Pink'}
            pickColor = {this.updateBandColor} 
        />
        <ColorBand 
            bandtype = {'bandD'} 
            bandlable = {'Band D color:'}
            bandOptions = {['Pink','Silver','Gold','Black','Brown','Red','Orange','Yellow','Green','Blue','Violet','Gray','White']}
            default = {'Black'}
            pickColor = {this.updateBandColor} 
        />
        <p><b>Resistance : {this.state.resistance +' Ohm '+(this.state.tolerance ? '± '+this.state.tolerance+'%':'')} </b></p>
        
        {/*<p><b>Resistence: {(()=> {
                    
                    let ohmcal = new OhmValueCalculator();
                    debugger;
                    let result = ohmcal.calculateOhmValue('Red','Red','Orange','Gold');
                    
                    return (result.Ohm+' Ohm '+(result.tolerance ? '+/- '+result.tolerance: ''));  
                })()
        } 
        </b></p>*/}
        
      </div>
    );
  }
}

export default OhmApp;
