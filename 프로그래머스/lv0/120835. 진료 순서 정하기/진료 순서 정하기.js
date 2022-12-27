function solution(emergency) {
    const emergencyArr = [];
    
    for (let i = 0; i < emergency.length; i++) {
        emergencyArr.push({ value: emergency[i], idx: i });
    }
    
    emergencyArr.sort((a, b) => b.value - a.value);
    
    const answer = new Array(emergencyArr.length);
    
    for (let i = 0; i < emergencyArr.length; i++) {
        let item = emergencyArr[i];
        answer[item.idx] = i + 1;
    }
    
    return answer;
}