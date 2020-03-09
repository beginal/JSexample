/*
정량 N에 정확히 맞춰야만 움직이는 화물용 엘레베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것 보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.

출력
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

const N = 33;
let count7 = 0;
let 나머지 = 0;
let count3 = 0;

for(let i=1; i< 10; i++) {
  if( 7*i <= N && N-(7*i) >= 3 ) {
    count7++
  count3 = (N-(7*i))/3
}
}
console.log(count7);
console.log(count3);

if(Number.isInteger(count7+count3) == false) {
  console.log('옮겨도 남네요')
} else {
  console.log(`총 ${count3+count7}번 옮길수 있습니다.`)
}
