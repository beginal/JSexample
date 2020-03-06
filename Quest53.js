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