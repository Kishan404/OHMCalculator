import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/resister.svg';

const Header =(props) => {
    return (
        <div className="header">
            <h1 className="header-title">{props.hearder}</h1>
            <img src={logo} className="header-logo" alt="logo" />
            <p className="header-subtitle">{props.subTitle}</p>
        </div>
    );
}
Header.prototype = {
    hearder : PropTypes.string,
    subTitle : PropTypes.string,
}
export default Header;