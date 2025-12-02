function f(x,y,z){
    return (x * (y + 1) * (z + 1) +y * (x + 1) * (z + 1) +z * (x + 1) * (y + 1)
   );
}



function head(arr){
    return arr[0]
  }
  
  function tail(arr) {
    return arr.slice(1);
  }
  
  function init(arr) {
    return arr.slice(0, -1);
  }
  
  function last(arr) {
    return arr[arr.length - 1];
}