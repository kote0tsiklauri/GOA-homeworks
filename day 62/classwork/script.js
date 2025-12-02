//! 1
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}



//! 2
function findOdd(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]); 
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]); 
        }
    }

    return result; 
}

//! 3 

function findOdd(arr1,arr2){
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length;j++) {
            if (arr1[i] != arr2[j]){
                result.push(arr1[i])
            }
        }
    }
}