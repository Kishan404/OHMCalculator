import {getBandAData,getBandBData,getBandCData,getBandDData} from './API/api';


class OhmValueCalculator {
    
    calculateOhmValue(bandAColor,bandBColor,bandCColor,bandDColor,colorcodemeta) {
        let result = {};

        if(bandAColor && bandBColor && bandCColor) {
            let significantDigits = +((getBandAData()[bandAColor])+(getBandBData()[bandBColor]));
            let multiplierValue =  getBandCData()[bandCColor];
            result.Ohm = Math.round(significantDigits *  multiplierValue * 1000)/1000;
            result.tolerance = getBandDData()[bandDColor];
        }
        

        return  result;
    } 
}

export default OhmValueCalculator;
