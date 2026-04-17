function peakAndValley(arr) {
  let ress = [];

  for (let i = 3; i < arr.length - 3; i++) {
    if (
      arr[i] > arr[i-1] &&
      arr[i] > arr[i-2] &&
      arr[i] > arr[i-3] &&
      arr[i] > arr[i+1] &&
      arr[i] > arr[i+2] &&
      arr[i] > arr[i+3]
    ) {
      ress.push(arr[i]);
    }else if (
      arr[i] < arr[i-1] &&
      arr[i] < arr[i-2] &&
      arr[i] < arr[i-3] &&
      arr[i] < arr[i+1] &&
      arr[i] < arr[i+2] &&
      arr[i] < arr[i+3]
    ) {
      ress.push(arr[i]);
    }
  }
  return ress;
}

function flyBy(lamps, drone) {
  lamps = lamps.split("");

  for (let i = 0; i < drone.length && i < lamps.length; i++) {
    lamps[i] = "o";
  }

  return lamps.join("");
}

function listToArray(list) {
  var ress = [];
  while(list !== null){
    ress.push(list.value);
    list = list.next;
  }
  return ress;
}
function perimeterSequence(a,n) {
  return 4 * n * a;  

}