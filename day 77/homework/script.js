function createObject(keys, values) {
    
    let result = {};
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = values[i];
    }
  
    return result;
  }