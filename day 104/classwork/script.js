function solve(a, b) {
    let result = '';
  
    for (let i = 0; i < a.length; i++) {
      let found = false;
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        result += a[i];
      }
    }
  
    for (let i = 0; i < b.length; i++) {
      let found = false;
      for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        result += b[i];
      }
    }
    return result;
}