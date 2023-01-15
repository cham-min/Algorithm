function solution(order) {
    let answer = 0;
    
    order.toString().split('').map((item) => {
        if (item === '3' || item === '6' || item === '9') answer += 1;
    });
    
    return answer;
}