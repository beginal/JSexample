/* 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 
그 중 괄호의 모양이 바르게 구성 된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만, 실력이 되시는 분들은 중괄호와 대괄호까지 판별해보세요.)

입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.
*/g

let gihos = ('(()){}{}[][][[]]][[][]][][{}}{}{}').split('');

let result = '';

function 괄호검색() {
  let count = 0;
  for (let i = 0; i < gihos.length; i++) {
    
    if (gihos[i] === '(' || gihos[i] === '[' || gihos[i] === '{') {
      count++
    }
    else if (gihos[i] === ')' || gihos[i] === ']' || gihos[i] === '}') {
      count--
    }

    if (count === 0) {
      result = 'Yes'
    } else if (count < 0) {
      result = 'No'
      break;
    } else {
      result = 'No'
    }
  }
  return result;
}

console.log(괄호검색())