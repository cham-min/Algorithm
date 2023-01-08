function solution(array) {
    const max = array.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
    const index = array.indexOf(max);
    
    return [max, index];
}