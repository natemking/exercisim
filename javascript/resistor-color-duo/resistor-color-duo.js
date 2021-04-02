//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (resitors) => {
  let finalCode='';

  resitors.slice(0,2).forEach(resistor => {
    finalCode += `${COLORS.findIndex(color => color === resistor.toLowerCase())}`
  });

  return parseInt(finalCode);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];