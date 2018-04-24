import React, { Component } from 'react';
import PropTypes from 'prop-types';

const OhmValue =(props) => {

    return (
        <div className="result">
            <div className="result-error">{props.error}</div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Resistance:</label></div>
                <div className="value resultvalue"><label >{props.resistance && props.resistance.toLocaleString()}</label></div>
                <div className="resultunits"><label >ohms</label></div>
            </div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Tolerance:</label></div>
                <div className="value resultvalue"><label >{(props.tolerance ||0) ? '± '+props.tolerance+'%':'0'}</label></div>
                <div className="resultunits"><label></label></div>
            </div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Minimum:</label></div>
                <div className="value resultvalue"><label>{props.tolerance? (Math.round((props.resistance-Math.round(props.resistance * props.tolerance/100*100000)/100000)*100000)/100000).toLocaleString():(props.resistance && props.resistance.toLocaleString())}</label></div>
                <div className="resultunits"><label>ohms</label></div>
            </div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Maximum:</label></div>
                <div className="value resultvalue"><label>{props.tolerance? (Math.round((props.resistance+Math.round(props.resistance * props.tolerance/100*100000)/100000)*100000)/100000).toLocaleString():(props.resistance && props.resistance.toLocaleString())}</label></div>
                <div className="resultunits"><label >ohms</label></div>
            </div>
            
        </div>
    );
}
OhmValue.propTypes = {
    resistance: PropTypes.number,
    tolerance: PropTypes.number,
    error: PropTypes.string
}
 
export default OhmValue;