const data = require('./colorcodes.json');

const getBandAData = () =>  data.bands[0].colorOptions;
const getBandBData = () => data.bands[1].colorOptions;
const getBandCData = () => data.bands[2].colorOptions; 
const getBandDData = () => data.bands[3].colorOptions;
const getHeader = () => data.header;
const getSubtitle = () => data.subtitle;
const getbands = () => data.bands;
const getBandAcolorOptions =() => Object.keys(data.bands[0].colorOptions);
const getBandBcolorOptions =() => Object.keys(data.bands[1].colorOptions);
const getBandCcolorOptions =() => Object.keys(data.bands[2].colorOptions);
const getBandDcolorOptions =() => Object.keys(data.bands[3].colorOptions);


export {getBandAData,getBandBData,getBandCData,getBandDData,getHeader,getSubtitle,getbands,getBandAcolorOptions,getBandBcolorOptions,getBandCcolorOptions,getBandDcolorOptions};