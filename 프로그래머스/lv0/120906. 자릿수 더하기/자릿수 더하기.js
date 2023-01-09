function solution(n) {
    const nArr = String(n);
    let answer = 0;
    
    for (let i = 0; i < nArr.length; i++) {
        answer += Number(nArr[i]);
    }
    
    return answer;
}