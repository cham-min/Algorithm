function solution(hp) {
    const damage = [5, 3, 1];
    let ant = 0;
    
    for (let i = 0; i < damage.length; i++) {
        let item = damage[i];
        
        if (hp >= item) {
            ant += Math.floor(hp / item);
            hp -= Math.floor(hp / item) * item;
        }
    }
    
    return ant;
}