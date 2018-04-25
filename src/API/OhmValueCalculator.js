import {getBandAData,getBandBData,getBandCData,getBandDData} from './api';


class OhmValueCalculator {
    /**
     * <summary>
     Calculates the Ohm value of a resistor based on the band colors.
     *</summary>
     * @param {string} bandAColor - The color of the first figure of component value band.
     * @param {string} bandBColor -The color of the second significant figure band.
     * @param {string} bandCColor -The color of the decimal multiplier band.
     * @param {string} bandDColor -The color of the tolerance value band.
     * @return {object} result - result object with ohm, tolerance and error.
     */
    calculateOhmValue(bandAColor,bandBColor,bandCColor,bandDColor) {
        let result = {};
        try {
            if(bandAColor && bandBColor && bandCColor) {
                let significantDigits = +((getBandAData()[bandAColor])+(getBandBData()[bandBColor]));
                let multiplierValue =  getBandCData()[bandCColor];
                result.Ohm = Math.round(significantDigits *  multiplierValue * 1000)/1000;
                //result.tolerance = result.Ohm !== 0 ? +getBandDData()[bandDColor]: 0;
                result.tolerance = +getBandDData()[bandDColor];
                result.error = isNaN(result.Ohm)? "Invalid Input":""; 
            } else {
                result.error =  "Insufficient input";
            }

        } catch(e){
            result.error = e.message;
        }
        
        return  result;
    } 
}

export default OhmValueCalculator;
