import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Resistor = (props) => {
    return (
        <div className="resistor">
            <span className="wire-start"></span>
            <span className="resitor-start"></span>
            <span className="resitor-middle"></span>
            <span className="resitor-end"></span>
            <span className="wire-end"></span>
            <span className={`resistor-color resistor-colorA ${props.colorinputs[0].toLowerCase()}`}></span>
            <span className={`resistor-color resistor-colorB ${props.colorinputs[1].toLowerCase()}`}></span>
            <span className={`resistor-color resistor-colorC ${props.colorinputs[2].toLowerCase()}`}></span>
            <span className={`resistor-color resistor-colorD ${props.colorinputs[3].toLowerCase()}`}></span>
        </div>
    );
}

Resistor.prototype = {
    colorinputs: PropTypes.array
}
export default Resistor;