import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OhmValueCalculator from '../../API/OhmValueCalculator';
import ColorBands from '../ColorBands/ColorBands';
import OhmValue from '../OhmValue/OhmValue';
import Header from '../Header/Header';
import Resistor from '../Resistor/Resistor';


class OhmValueApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorinputs: props.defaultcolorinputs,
            resistance: props.resistance,
            tolerance: props.tolerance,
        };
        this.handleColorPick = this.handleColorPick.bind(this);
    }
    componentDidMount() {

        let ohmcal = new OhmValueCalculator();
        
        let result = ohmcal.calculateOhmValue(...this.props.defaultcolorinputs);
        console.log(result);
        this.setState(() => {
            return {
                resistance: result.Ohm,
                tolerance: result.tolerance,
                error: result.error
            }
        });

    }    
    /**
     * Handles Color change event and updates the state with new result. 
     * @param {stirng} newcolor 
     * @param {number} bandType 
     */
    handleColorPick(newcolor,bandType) {
        let updatedinputs = this.state.colorinputs.slice();
        updatedinputs[bandType] = newcolor;
        this.setState(()=> {
            return {
                colorinputs: updatedinputs
            }
        });

        let ohmcal = new OhmValueCalculator();
        
        debugger;
        this.setState((prevState)=> {
            let result = ohmcal.calculateOhmValue(...prevState.colorinputs);
        return {
                resistance: result.Ohm,
                tolerance: result.tolerance
            }
        });

    }
    render() {
        return (
        <div className="ohmvalue-app">
            <Header
                hearder = {this.props.hearder}
                subTitle ={this.props.subTitle} 
            />
            <div className="Ohminput">
                <div className="Ohminput-selection">
                    <ColorBands 
                        bandsList = {this.props.bandsList}
                        handleColorPick = {this.handleColorPick}
                    />
                </div>
                <div className="Ohminput-image">
                    <Resistor 
                        colorinputs = {this.state.colorinputs}
                    />
                </div>    
            </div>
            <OhmValue 
                resistance = {this.state.resistance}
                tolerance = {this.state.tolerance}
                error = {this.state.error}            
            />
        </div>
        );
    }
}

OhmValueApp.propTypes = {
    bandsList: PropTypes.array,
    hearder : PropTypes.string,
    subTitle : PropTypes.string,
    defaultcolorinputs: PropTypes.array
};

export default OhmValueApp;
