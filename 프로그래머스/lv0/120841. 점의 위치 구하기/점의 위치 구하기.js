function solution(dot) {
    const [x, y] = dot;
    const check = x * y > 0;
    
    // if (x > 0 && y > 0) return 1;
    // if (x < 0 && y > 0) return 2;
    // if (x < 0 && y < 0) return 3;
    // if (x > 0 && y < 0) return 4;
    
    return x > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}