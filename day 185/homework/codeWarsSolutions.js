function countLonelyLetters(text) {
    const string = text.toLowerCase().replace(/[^a-z]/g,'')
        
    const freq = {};
    for (let ch of string) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let count = 0;

    for (let ch in freq) {
        if (freq[ch] !== 1) continue;

        const code = ch.charCodeAt(0);

        const prev = String.fromCharCode(code - 1);
        const next = String.fromCharCode(code + 1);

        const hasPrev = ch !== 'a' && freq[prev];
        const hasNext = ch !== 'z' && freq[next];

        if (!hasPrev && !hasNext) {
            count++;
        }
    }

    return count;
    return 0;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    const months = {
        January: 1, February: 2, March: 3, April: 4,
        May: 5, June: 6, July: 7, August: 8,
        September: 9, October: 10, November: 11, December: 12
    };
    if(enteredCode !== correctCode){
        return false
    }
    function dateArray(dateStr){
        const [month,dayWhithComa,year] = dateStr.split(" ");
        const day = Number(dayWhithComa.replace(",", ""))
        return [Number(year),months[month],day]
    }
    const [cYear, cMonth, cDay] = dateArray(currentDate);
    const [eYear, eMonth, eDay] = dateArray(expirationDate);

    if (cYear < eYear) return true;
    if (cYear > eYear) return false;

    if (cMonth < eMonth) return true;
    if (cMonth > eMonth) return false;

    return cDay <= eDay;
}

function identifyMonster(observedWeaknesses, bestiary) {
    for (let [monster, vulnList] of Object.entries(bestiary)) {
        let isMatch = true;

        for (let w of observedWeaknesses) {
            if (!vulnList.includes(w)) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return monster;
        }
    }

    return "Unknown monster";
}

