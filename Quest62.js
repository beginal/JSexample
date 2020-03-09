// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고싶습니다.

let ans = ('aaabccddddddddddeffffffffffggghhhh').split('')
let anb = '';
let stb = ans[0];
let count = 0;
for(let i of ans) {
  if( i === stb) {
    count++
  } else {
    anb += String(count-1)
    stb = i;
    count = 1;
  }
}

anb += String(count-1);
console.log(anb)