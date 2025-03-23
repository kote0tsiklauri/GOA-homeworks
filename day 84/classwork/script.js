function similarity(a, b) {

    let intersectionCount = 0;
    let unionCount = 0;
  
    let i = 0, j = 0;
  
    
    while (i < a.length || j < b.length) {
      if (i < a.length && (j >= b.length || a[i] < b[j])) {
        
        unionCount++;
        i++;
      } else if (j < b.length && (i >= a.length || b[j] < a[i])) {
        
        unionCount++;
        j++;
      } else {
        
        intersectionCount++;
        unionCount++;
        i++;
        j++;
      }
    }
  
    
    return intersectionCount / unionCount;
}