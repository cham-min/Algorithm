function solution(my_string) {
    let answer = 0;
    const numArr = my_string.split("");
    
    for (let i = 0; i <= my_string.length; i++) {
        if(Number(numArr[i])) answer += Number(numArr[i]);
    }
    
    return answer;
}