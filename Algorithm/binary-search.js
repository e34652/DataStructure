function solution(target, arr) {
  let answer;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) { // start와 end를 반복문 내부에서 동적 설정 
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
      answer = mid;
      break;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

console.log(solution(23, [1, 7, 9, 11, 13, 19, 21, 23, 29, 31, 32]));
