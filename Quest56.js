// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWidth = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England': 242900,
};

const korea = nationWidth['korea']

console.log(korea);

delete nationWidth['korea']

let entry = Object.entries(nationWidth)
let keys = Object.keys(nationWidth)
let values = Object.values(nationWidth)


let gap = Math.max.apply(null, values);
let item = [];
let ons;

for(let i in entry) {
  ons = Math.abs(entry[i][1] - korea);
  if( gap > ons) {
    gap = ons;
    item = entry[i]
  }
}

console.log(item[0],ons)