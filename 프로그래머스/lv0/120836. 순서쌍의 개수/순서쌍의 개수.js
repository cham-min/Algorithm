function solution(n) {
    const MAX_NUMBER = 1000000;
    let count = 1;
    
    for (let i = 0; i < n; i++) {
        if (n > MAX_NUMBER) break;
        if (n % i === 0) count += 1;
    }
    
    return count;
}