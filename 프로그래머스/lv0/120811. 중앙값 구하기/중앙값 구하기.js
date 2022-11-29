function solution(array) {
    
    /*
    // Bubble sort
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    */
    
    /*
    // Selection sort
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
    }
    */
    
    // Insertion sort
    for(let i = 1; i < array.length; i++){
        let cur = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > cur){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = cur;
    }
    
    return array[Math.floor(array.length / 2)]
}