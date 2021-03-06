import React from 'react';
import ReactDOM from 'react-dom';
import OhmValueApp from './OhmValueApp';

it('renders OhmValueApp without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OhmValueApp 
                  bandsList = {[
        {
            bandLabel: "Band A Color",
            bandType: "firstDigitColor",
            colorOptions: {
                Brown: 1,
                Red: 2,
                Orange: 3,
                Yellow: 4,
                Green: 5,
                Blue: 6,
                Violet: 7,
                Gray: 8,
                White: 9
            }
        },
        {
            bandLabel: "Band B Color",
            bandType: "secondDigitColor",
            colorOptions: {
                Black: 0,
                Brown: 1,
                Red: 2,
                Orange: 3,
                Yellow: 4,
                Green: 5,
                Blue: 6,
                Violet: 7,
                Gray: 8,
                White: 9
            }
        },
        {
            
            bandLabel: "Band C Color",
            bandType: "multiplierColor",
            colorOptions: {
                Pink: 0.001,
                Silver: 0.01,
                Gold: 0.1,
                Black: 1,
                Brown: 10,
                Red: 100,
                Orange: 1000,
                Yellow: 10000,
                Green:100000,
                Blue:1000000,
                Violet:10000000,
                Gray:100000000,
                White:1000000000
            }
        },
        {
            bandLabel: "Band D Color",
            bandType: "toleranceColor",
            colorOptions: {
                Red:2,
                Silver: 10,
                Gold: 5,
                Black: 0,
                Brown: 1,
                Orange: 0,
                Yellow: 5,
                Green: 0.5,
                Blue: 0.25,
                Violet: 0.1,
                Gray: 0.05,
                White: 0,
                Pink: 0,
                None: 20
            }
        }
    ]
    }
                  hearder = {'this is the test header'}
                  subTitle = {'this is the test sub header'} 
                  defaultcolorinputs = {['Red','Red','Orange','Green']}
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});