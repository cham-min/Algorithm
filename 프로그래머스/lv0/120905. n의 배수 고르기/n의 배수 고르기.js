function solution(n, numlist) {
    let answer = [];
    
    numlist.map((num) => {
        if (num % n === 0) answer.push(num);
    })
    
    return answer;
}