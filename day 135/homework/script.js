function uniquePush(arr, obj) {
    if (!obj || !obj.phoneNumber) {
      return false;
    }
  
    const exists = arr.some(p => p.phoneNumber === obj.phoneNumber);
  
    if (!exists) {
      arr.push(obj);
      return true;
    }
  
    return false;
}

//* python
// def filter_numbers(string):
//     return "".join(x for x in string if not x.isdigit())