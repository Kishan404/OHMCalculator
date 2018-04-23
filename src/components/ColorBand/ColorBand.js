import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColorBand extends Component {
    constructor(props) {
        super(props);
        this.handleColorPick = this.handleColorPick.bind(this);
    }
    handleColorPick(e) {
    
      let pickedcolor = e.target.value;
      this.props.handleColorPick(pickedcolor,this.props.bandType);
      console.log('BandType:'+this.props.bandType);
      console.log('pickedcolor:'+pickedcolor);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.bandType}>{this.props.bandLabel}</label> 
                <select id={this.props.bandType} onInput={this.handleColorPick}>
                   {this.props.bandOptions.map((color,key)=>{ return <option key={key} className={color} value={color} >{color}</option>})}
                </select>
                

            </div>
        );
    }
}

ColorBand.propTypes = {
bandType : PropTypes.string,
bandLabel : PropTypes.string,
bandOptions : PropTypes.array,
handleColorPick : PropTypes.func
}

export default ColorBand;