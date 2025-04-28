function nthEven(n) {
    return (n - 1) * 2;
  }
  function combat(health, damage) {
    let result = health - damage
    if (result > 0){
      return result
    }else{
      return 0
    }
}

function xor(a, b) {
    return (a || b) && !(a && b);
}