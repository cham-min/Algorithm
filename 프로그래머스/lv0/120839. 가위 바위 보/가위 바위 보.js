function solution(rsp) {
    const rspObj = {
        '0': 5,
        '2': 0,
        '5': 2
    };
    const rspStr = String(rsp);
    let answer = [];
     
    for (let i = 0; i < rspStr.length; i++) {
        answer.push(rspObj[rspStr[i]]);
    }
    
    return answer.join('');
}