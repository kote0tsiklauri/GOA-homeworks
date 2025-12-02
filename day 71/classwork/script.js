function match(usefulness, months) {
  
    let womanNeeds = 100;
    for (let i = 0; i < months; i++) {
      womanNeeds *= 0.85; 
    }
  
    let husbandUsefulness = 0;
    for (let i = 0; i < usefulness.length; i++) {
      husbandUsefulness += usefulness[i];
    }
  
    
    if (husbandUsefulness >= womanNeeds) {
      return "Match!";
    } else {
      return "No match!";
    }
}