function stalinSort(array) {
  for (let i = 1; i < array.length; ) {
    if (array[i] < array[i - 1]) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
}

const powers = (n) => {
  const result = [];
  let power = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      result.push(2 ** power);
    }
    n = Math.floor(n / 2);
    power++;
  }

  return result;
};

function rndCode(){
  const uppercase = "ABCDEFGHIJKLM";
  const symbols = "~!@#$%^&";
  const getChar = chars =>  chars[Math.floor(Math.random()* chars.length)];
  const getNumber = () => String(Math.floor(Math.random() * 10));
  const res = getChar(uppercase) + getChar(uppercase) + getNumber() + getNumber() + getNumber() + getNumber() + getChar(symbols) + getChar(symbols)
  return res;
}