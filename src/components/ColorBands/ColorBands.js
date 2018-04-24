import React, { Component } from 'react';
import ColorBand from '../ColorBand/ColorBand';
import PropTypes from 'prop-types';

const ColorBands =(props) => {
    return (
        <div className="colorbands">
            {props.bandsList.map((band,key)=>{
                return <ColorBand 
                            key ={key}
                            bandIndex = {key}
                            bandLabel = {band.bandLabel} 
                            bandOptions = {Object.keys(band.colorOptions)}
                            handleColorPick = {props.handleColorPick} 
                        />
            })}
        </div>
    );
}
ColorBands.propTypes = {
    bandsList : PropTypes.array,
    handleColorPick : PropTypes.func
}
export default ColorBands;