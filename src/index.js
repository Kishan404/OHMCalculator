import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import OhmValueApp from './components/OhmValueApp/OhmValueApp';
import {getHeader,getSubtitle,getbands,getDefaultcolorinputs} from './API/api';
import registerServiceWorker from './registerServiceWorker';

console.log(getDefaultcolorinputs());

ReactDOM.render(<OhmValueApp 
                 bandsList = {getbands()}
                 hearder = {getHeader()}
                 subTitle = {getSubtitle()}
                 defaultcolorinputs = {getDefaultcolorinputs()}
                />, document.getElementById('root'));
registerServiceWorker();
