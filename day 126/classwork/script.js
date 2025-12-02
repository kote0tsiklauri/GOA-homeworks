function sc(floor) {
    if (floor <= 1) return "";
    let result = "";
    
    for (let i = 1; i < floor; i++) {
      result += "Aa~ ";
    }
  
    result += "Pa!";
    
    if (floor <= 6) {
      result += " Aa!";
    }
  
    return result;
}