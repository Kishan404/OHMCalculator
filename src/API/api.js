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
//const getDefaultcolorinputs = () => [getBandAcolorOptions()[0],getBandBcolorOptions()[0],getBandCcolorOptions()[0],getBandDcolorOptions()[0]];
const getDefaultcolorinputs = () => {
    const result = [];
    result.push(getBandAcolorOptions()[0]);
    result.push(getBandBcolorOptions()[0]);
    result.push(getBandCcolorOptions()[0]);
    result.push(getBandDcolorOptions()[0]);

    return result;
}

export {getBandAData,getBandBData,getBandCData,getBandDData,getHeader,getSubtitle,getbands,getBandAcolorOptions,getBandBcolorOptions,getBandCcolorOptions,getBandDcolorOptions,getDefaultcolorinputs};