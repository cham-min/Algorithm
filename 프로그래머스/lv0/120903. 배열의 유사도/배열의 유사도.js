function solution(s1, s2) {
    return s1.filter((element, index) => s2.includes(element)).length
}