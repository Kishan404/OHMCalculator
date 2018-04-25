import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColorBand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedcolor: props.bandOptions[0][0].toLowerCase()
        }
        this.handleColorPick = this.handleColorPick.bind(this);
    }
    /**
     * 
     * @param {event} e 
     */
    handleColorPick(e) {
    
      let pickedcolor = e.target.value;
      this.props.handleColorPick(pickedcolor,this.props.bandIndex);
      console.log('pickedcolor:'+pickedcolor);
      this.setState(()=>({selectedcolor:pickedcolor.toLowerCase()}))

    }
    /**
     * returns number in k M G format
     * @param {number} num 
     */
    formatNumtokMG(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        }
        return num;
   }
   /**
    * Formate color option bansed on the band Type
    * @param {*} bandOption 
    */
    formatColorOption(bandOption) {
        
        switch(this.props.bandIndex) {
            case 0:
                return bandOption[0]+'  ('+bandOption[1]+')';  
                break;
            case 1:
                return bandOption[0]+'  ('+bandOption[1]+')';
                break;
            case 2:
                return bandOption[0]+'  ('+this.formatNumtokMG(+bandOption[1])+')';
                break;
            case 3:
                return bandOption[0]+'  (±'+bandOption[1]+'%)';
                break;    
            default:
        }

    }

    render() {
        return (
            <div className="colorband">
                <label className="label" htmlFor={'band'+this.props.bandIndex}>{this.props.bandLabel}</label> 
                <select className={`colorselector ${this.state.selectedcolor}`} id={'band'+this.props.bandIndex} onInput={this.handleColorPick}>
                   {this.props.bandOptions.map((bandOption,key)=>{ return <option key={key} className={`coloroption ${bandOption[0].toLowerCase()}`}value={bandOption[0]} >{this.formatColorOption(bandOption)}</option>})}
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