function solution(denum1, num1, denum2, num2) {
    const denum = (denum1 * num2) + (denum2 * num1);
    const num = num1 * num2;
    let smaller;
    
    denum > num ? 
        smaller = num :
        smaller = denum;
    
    while(true) {
        if (denum % smaller === 0 && num % smaller === 0)
            return [denum / smaller, num / smaller]
        
        smaller -= 1;
    }
}