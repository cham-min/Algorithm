function solution(denum1, num1, denum2, num2) {
    const denum = (denum1 * num2) + (denum2 * num1);
    const num = num1 * num2;
    const gcd = findGCD(denum, num);
    
    return [denum / gcd, num / gcd];
}

function findGCD(num1, num2) {
    return num1 % num2 ? findGCD(num2, num1 % num2) : num2;
}