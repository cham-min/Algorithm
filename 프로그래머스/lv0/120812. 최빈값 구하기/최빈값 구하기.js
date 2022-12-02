function solution(array) {
    const modeObj = array.reduce((acc, cur) => {
        acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
    }, {});
    
    const modeVal = Object.keys(modeObj).reduce((acc, cur) =>
        modeObj[acc]  > modeObj[cur] ? acc : (
            modeObj[acc] === modeObj[cur] ? -1 : cur
        )                               
    );

    return Number(modeVal);
}

