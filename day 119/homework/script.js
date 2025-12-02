//* 1
function usersToMap(usersArray) {
    const map = new Map();
    for (let user of usersArray) {
      map.set(user.name, user.age);
    }
    return map;
}

//* 2
function uniqueNumbers(arr) {
    return [...new Set(arr)];
}

//* 3
function wordFrequency(sentences) {
    const map = new Map();
    for (let sentence of sentences) {
        const words = sentence.split(/\s+/);
        for (let word of words) {
        word = word.toLowerCase();
        map.set(word, (map.get(word) || 0) + 1);
        }
    }
    return map;
}