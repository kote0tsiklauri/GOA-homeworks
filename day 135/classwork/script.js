function position(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const index = alphabet.indexOf(letter.toLowerCase()) + 1;
    return `Position of alphabet: ${index}`;
}

function decodeResistorColors(bands) {
    const map = {
     black: 0,
     brown: 1,
     red: 2,
     orange: 3,
     yellow: 4,
     green: 5,
     blue: 6,
     violet: 7,
     gray: 8,
     white: 9
   };
   
    
   const toleranceMap = {
     gold: "5%",
     silver: "10%"
   };
   
   let colors = bands.split(" ")
   
   let num1 = map(colors[0])
   let num2 = map(colors[1])
   const num3 = Math.pow(10, colorMap[parts[2]]);
   const tolerance = toleranceMap[colors[3]] || "20%";
   const resistance = (digit1 * 10 + digit2) * num3;
 
   return `${resistance} ohms, 20%`;
    
}