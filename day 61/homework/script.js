function HQ9(code) {
    if (code === 'H') {
        return "Hello World!";
    } else if (code === 'Q') {
        return code;
    } else if (code === '9') {
        let lyrics = [];
        for (let i = 99; i > 0; i--) {
        let bottleWord = (i !== 1) ? "bottles" : "bottle";
        let nextBottleWord = (i !== 2) ? "bottles" : "bottle";
        
        lyrics.push(`${i} ${bottleWord} of beer on the wall, ${i} ${bottleWord} of beer.`);
        if (i > 1) {
            lyrics.push(`Take one down and pass it around, ${i-1} ${nextBottleWord} of beer on the wall.`);
        } else {
            lyrics.push("Take one down and pass it around, no more bottles of beer on the wall.");
        }
        }
        lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
        lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
        return lyrics.join("\n");
    } else {
        return ;
    }
}



//! 2

function likes(names) {
    if (names.length === 0) {
      return 'no one likes this'
    } else if (names.length === 1) {
      return `${names[0]} likes this`
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } 
    else if (names.length > 2) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }