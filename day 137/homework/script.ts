function sumEvenOdd(numbers: number[]): { evenSum: number; oddSum: number } {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    return { evenSum, oddSum };
}




// 2
function countUniqueWords(text: string): number {
    const words = text.toLowerCase().split(/\s+/);
    const uniqueWords = new Set(words); 
    return uniqueWords.size;
}




// 3
function longestWord(text: string): string {
    const words = text.split(/\s+/);
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("TypeScript is amazing and powerful")); 


// 4
function differenceArray(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(item => !arr2.includes(item));
}



// 5
function isPalindrome(text: string): boolean {
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleanText.split("").reverse().join("");
    return cleanText === reversed;
}
