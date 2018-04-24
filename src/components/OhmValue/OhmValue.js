import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './OhmValue.css';

const OhmValue =(props) => {
    console.log((props.resistance-(props.resistance * props.tolerance)));
    console.log((props.resistance * props.tolerance));
    console.log(props.tolerance);
    console.log(props.resistance);

    return (
        <div className="result">
            <div className="resultrow">
                <div className="resultlable"><label className="label">Resistance:</label></div>
                <div className="value resultvalue"><label >{props.resistance}</label></div>
                <div className="resultunits"><label >ohms</label></div>
            </div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Tolerance:</label></div>
                <div className="value resultvalue"><label >{(props.tolerance ||0) ? '± '+props.tolerance+'%':'0'}</label></div>
                <div className="resultunits"><label></label></div>
            </div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Minimum:</label></div>
                <div className="value resultvalue"><label>{props.tolerance? Math.round((props.resistance-Math.round(props.resistance * props.tolerance/100*100000)/100000)*100000)/100000:props.resistance}</label></div>
                <div className="resultunits"><label>ohms</label></div>
            </div>
            <div className="resultrow">
                <div className="resultlable"><label className="label">Maximum:</label></div>
                <div className="value resultvalue"><label >{props.tolerance? Math.round((props.resistance+Math.round(props.resistance * props.tolerance/100*100000)/100000)*100000)/100000:props.resistance}</label></div>
                {/* <div><label className="resultvalue">{props.tolerance? (props.resistance+(props.resistance * props.tolerance/100)):props.resistance}</label></div> */}
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