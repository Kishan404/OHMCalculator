import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OhmValueApp from './components/OhmValueApp/OhmValueApp';
import {getHeader,getSubtitle,getbands,getBandAcolorOptions,getBandBcolorOptions,getBandCcolorOptions,getBandDcolorOptions} from './API/api';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OhmValueApp 
                 bandsList = {getbands()}
                 hearder = {getHeader()}
                 subTitle = {getSubtitle()}
                 firstDigitColor = {getBandAcolorOptions()[0]}
                 secondDigitColor = {getBandBcolorOptions()[0]}
                 multiplierColor = {getBandCcolorOptions()[0]}
                 toleranceColor = {getBandDcolorOptions()[0]}
                />, document.getElementById('root'));
registerServiceWorker();
