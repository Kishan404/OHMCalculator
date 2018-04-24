import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColorBand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedcolor: props.bandOptions[0].toLowerCase()
        }
        this.handleColorPick = this.handleColorPick.bind(this);
    }
    
    handleColorPick(e) {
    
      let pickedcolor = e.target.value;
      this.props.handleColorPick(pickedcolor,this.props.bandIndex);
      this.setState(()=>({selectedcolor:pickedcolor.toLowerCase()}))
      console.log('bandIndex:'+this.props.bandIndex);
      console.log('pickedcolor:'+pickedcolor);
     

    }

    render() {
        return (
            <div className="colorband">
                <label className="label" htmlFor={'band'+this.props.bandIndex}>{this.props.bandLabel}</label> 
                <select className={`colorselector ${this.state.selectedcolor}`} id={'band'+this.props.bandIndex} onInput={this.handleColorPick}>
                   {this.props.bandOptions.map((color,key)=>{ return <option key={key} className={`coloroption ${color.toLowerCase()}`}value={color} >{color}</option>})}
                </select>
                

            </div>
        );
    }
}

ColorBand.propTypes = {
bandIndex : PropTypes.number,
bandLabel : PropTypes.string,
bandOptions : PropTypes.array,
handleColorPick : PropTypes.func
}

export default ColorBand;