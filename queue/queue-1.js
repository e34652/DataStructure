function solution(commands) {
  const queue = [];
  const result = [];

  commands.forEach((command) => {
    //ENQUEUE, 숫자로 분리
    const [action, value] = command.split(" ");

    if (action === "ENQUEUE") {
      queue.push(Number(value));
    } else if (action === "DEQUEUE") {
      result.push(queue.length ? queue.shift() : "EMPTY");
    }
    return result;
  });
}
console.log(
  solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"])
);
두;
