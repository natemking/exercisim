//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  const final = [[1], [1,1]];
  
  if (num === 0) return [];
  if (num === 1) return final.slice(0,1);

  if (num > 2){
    for (let i = 1; i < num - 1; i++) {
      const arr = [1];

      for (let j = 0; j < final[i].length - 1; j++) {
        arr.push(final[i][j] + final[i][j+1])
      }
      
      arr.push(1);
      final.push(arr);
    }
  }
  return final
};
