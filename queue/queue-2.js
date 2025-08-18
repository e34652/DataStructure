function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    const person = queue.shift();
    if (person % 2 === 0) {
      result.push(person);
    } else {
      queue.push(person);
    }
  }
  return result;
}
console.log(solution([1, 3, 4], [6, 5, 8], 3));
