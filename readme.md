# 자료구조

<strong>ADT (Abstract Data Type)</strong>: “무엇을 할 수 있는가”를 정의하는 <strong>행동 규약</strong> (예: <strong>스택</strong> = LIFO, <strong>큐</strong> = FIFO).

<strong>DS (Data Structure)</strong>: 그 규약을 만족하도록 실제로 <strong>저장·연결·탐색</strong>하는 <strong>구현 방식</strong> (예: <strong>배열</strong>, <strong>연결 리스트</strong>, <strong>원형 버퍼</strong> 등).

예) <strong>모델링(ADT)</strong>은 스택, <strong>구현(DS)</strong>은 “배열로 만든 스택”, “연결 리스트로 만든 스택” 등 다양하게 가능.

<details> <summary><strong>스택 (Stack)</strong></summary>
1) 정의(ADT)

<strong>LIFO(후입선출)</strong> 규칙을 가지는 선형 자료구조.

한쪽 끝에서만 삽입/삭제가 일어남.

<strong>top</strong>: 최근 원소를 가리키는 멤버(필드).

2. 핵심 특징

입력·삭제 모두 <strong>한 방향</strong>에서 수행.

<strong>pop</strong> 후 <strong>top</strong>은 <strong>그 직전 원소</strong>를 가리킴.

<strong>배열/연결 리스트</strong> 등 여러 DS로 구현 가능.

3. 대표 연산(메서드)

의사 코드

push(x): a[size] = x; size++

pop(): if size == 0 → underflow
size--; return a[size]

top(): if size == 0 → underflow
return a[size-1]

TypeScript 레퍼런스 구현

export class Stack<T> {
private data: T[] = [];
push(x: T) { this.data.push(x); } // O(1) 평균
pop(): T | undefined { return this.data.pop(); } // O(1) 평균
top(): T | undefined { return this.data[this.data.length - 1]; } // O(1)
size() { return this.data.length; } // O(1)
empty() { return this.data.length === 0; } // O(1)
}

4. 오류 케이스

<strong>Underflow</strong>: 빈 스택에서 <code>pop</code>/<code>top</code>.

<strong>Overflow</strong>: 고정 용량에서 한도를 초과해 <code>push</code>.

5. 구현방식

<strong>동적 배열</strong>: 캐시 친화적, <code>push</code> 평균 O(1) (리사이즈 순간 O(n)).

<strong>연결 리스트</strong>: 중간 조작 유리, 하지만 임의 접근 O(n).

<strong>왜 배열이 캐시 친화적?</strong>
CPU는 읽을 때 <strong>인접 메모리 블록까지 미리 가져오는 경향</strong>(프리패치)이 있어, 한 번 접근하면 이웃한 값들이 캐시에 올라와 <strong>연속 접근</strong>이 빠름.

6. 활용 예시

브라우저 <strong>뒤로가기</strong>, <strong>실행 취소(Undo)</strong>, <strong>후위 표기식 계산</strong>, <strong>호출 스택</strong>.

7. Big-O 퀵 표

<strong>Push / Pop / Top</strong>: 평균 <strong>O(1)</strong>.

8. 면접 포인트

배열 vs 연결 리스트로 구현 시 <strong>장단점</strong> 비교.

<strong>Min-Stack</strong> 설계(보조 스택, 차이값 트릭 등).

</details>
<details> <summary><strong>큐 (Queue)</strong></summary>
1) 정의(ADT)

<strong>FIFO(선입선출)</strong> 규칙을 가지는 선형 자료구조.

뒤(<strong>rear</strong>)로 삽입, 앞(<strong>front</strong>)에서 삭제 — <strong>입·출력 위치가 분리</strong>됨.

2. 핵심 특징

<strong>front</strong>: 삭제/조회가 일어나는 위치(맨 앞).

<strong>rear</strong>: 삽입이 일어나는 위치(맨 뒤).

먼저 들어온 데이터가 먼저 나가는 <strong>대기 행렬</strong>.

<strong>배열/연결 리스트</strong> 등 여러 DS로 구현 가능.

3. 대표 연산(메서드)

<strong>enqueue(x)</strong>: 뒤(<strong>rear/back</strong>)에 삽입

<strong>dequeue()</strong>: 앞(<strong>front</strong>)에서 제거+반환

<strong>front()/peek()</strong>: 가장 앞 요소 조회

<strong>empty()</strong>, <strong>size()</strong>: 공백/크기 확인

4. 오류 케이스

<strong>Underflow</strong>: 빈 큐에서 <code>dequeue</code>.

<strong>Overflow</strong>: 고정 용량에서 한도를 초과해 <code>enqueue</code>.

5. 구현방식
   A) 단순 배열

앞에서 <strong>dequeue</strong>를 하면 앞쪽 인덱스가 비지만, <strong>그 칸을 즉시 재사용하기 어렵다</strong>(매번 시프트하면 O(n)).

해결: <strong>원형 큐(circular queue)</strong>.

B) 원형 큐 (배열 기반, 모듈러 연산)

인덱스를 <strong>모듈러</strong>(나머지)로 <strong>회전</strong>시켜 빈 칸을 재활용.

용어 정리: <strong>capacity</strong> = 내부 배열의 길이(크기).
<strong>front</strong> = 삭제 위치(헤드, head), <strong>rear</strong> = 삽입 위치(테일, tail).

갱신 규칙(대표 예시):

rear = (rear + 1) % capacity; // enqueue 후 삽입 위치 이동
front = (front + 1) % capacity; // dequeue 후 삭제 위치 이동

크기 계산(표현 통일):

size = (rear - front + capacity) % capacity;

가득 참/비었음 판정 (두 가지 설계 중 택1):

<strong>size 변수</strong>를 유지한다 → <code>size == 0</code>이면 빈 큐, <code>size == capacity</code>이면 가득 참.

<strong>한 칸 비워두기</strong> 규약 → <code>rear == front</code>이면 빈 큐,
<code>(rear + 1) % capacity == front</code>이면 가득 참.

C) 연결 리스트

<strong>front</strong>와 <strong>rear</strong> 포인터만 유지하면 <strong>enqueue/dequeue 모두 O(1)</strong>.

메모리 오버헤드(포인터) 있지만 <strong>유연성</strong>이 좋음(리사이즈 불필요).

6. 활용 예

<strong>프로세스 스케줄링</strong>, <strong>윈도우 메시지 큐</strong>, <strong>캐시/파이프라인</strong>, <strong>BFS</strong> 등.

7. Big-O 퀵 표

<strong>Enqueue / Dequeue / Front</strong>: <strong>O(1)</strong> (배열 원형/연결 리스트 기준).

</details>
