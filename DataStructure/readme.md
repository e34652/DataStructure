<strong>ADT (Abstract Data Type)</strong>: “무엇을 할 수 있는가”를 정의하는 <strong>행동 규약</strong> (예시: <strong>스택</strong> = LIFO, <strong>큐</strong> = FIFO).

<strong>DS (Data Structure)</strong>: 그 규약을 만족하도록 실제로 <strong>저장·연결·탐색</strong>하는 <strong>구현 방식</strong> (예시: <strong>배열</strong>, <strong>연결 리스트</strong>, <strong>원형 버퍼</strong> 등).

<strong>예</strong>: <strong>모델링(ADT)</strong>은 스택, <strong>구현(DS)</strong>은 “배열로 만든 스택”, “연결 리스트로 만든 스택” 등 다양하게 가능.

<details> <summary><strong>스택 (Stack)</strong></summary>

## 정의(ADT)

- <strong>LIFO(후입선출)</strong> 규칙을 가지는 선형 자료구조.

- 한쪽 끝에서만 삽입/삭제가 일어남.

- 최근 원소를 가리키는 멤버 top을 가짐(필드).

## 특징

- 입력·삭제 모두 <strong>한 방향</strong>에서 수행.

- <strong>pop( )</strong> 후 <strong>top</strong>은 <strong>그 직전 원소</strong>를 가리킴.

- <strong>배열/연결 리스트</strong> 등 여러 DS로 구현 가능.

## 대표 연산(메서드)

- `push(x)`: 맨 위에 삽입
- `pop()`: 맨 위 원소 제거+반환  
  ( 요소를 꺼내며 제거하는 연산, 자료구조마다 위치는 다름)

- `top()/peek()`: 맨 위 원소 조회
- `empty()`: 자료구조가 비어 있는지 확인
- `size()`: 자료구조에 들어 있는 요소의 개수를 반환

## 오류 케이스

- <strong>Underflow</strong>: 빈 스택에서 <code>pop</code>/<code>top</code>.

- <strong>Overflow</strong>: 고정 용량에서 한도를 초과한 <code>push</code>.

## 구현방식

- <strong>동적 배열</strong>: 캐시 친화적

- <strong>연결 리스트</strong>: 중간 조작 유리

## <strong>캐시 친화적인 이유</strong>:

CPU는 읽을 때 인접 메모리 블록까지 <strong>프리패치</strong>해 연속 접근이 빠름.

따라서 메모리 상에서 연속된 공간을 차지하는 동적 배열은  
지역성이 캐시 효율이 더 좋음

## 활용 예시

- 브라우저 <strong>뒤로가기</strong>
- <strong>실행 취소(Undo)</strong>
- <strong>후위 표기식 계산</strong>
- <strong>호출 스택</strong>

## Big-O

<strong>Push / Pop / Top</strong>: 평균 <strong>O(1)</strong>.

</details>
<details> <summary><strong>큐 (Queue)</strong></summary>

## 정의(ADT)

- <strong>FIFO(선입선출)</strong> 규칙을 가지는 선형 자료구조.

- 뒤(<strong>rear</strong>)로 삽입, 앞(<strong>front</strong>)에서 삭제 — <strong>입·출력 위치 분리</strong>.

## 특징

- <strong>front</strong>: 삭제/조회가 일어나는 위치(맨 앞).

- <strong>rear</strong>: 삽입이 일어나는 위치(맨 뒤).

- 먼저 들어온 데이터가 먼저 나가는 <strong>대기 행렬</strong>.

- <strong>배열 / 연결 리스트</strong> 등 여러 DS로 구현 가능.

## 대표 연산(메서드)

- <strong>`enqueue(x)`</strong>: 뒤(<strong>rear/back</strong>)에 삽입.

- <strong>`dequeue()`</strong>: 앞(<strong>front</strong>)에서 제거+반환.

- <strong>`front()` / `peek()`</strong>: 가장 앞 요소 조회(보존).

- <strong>`empty()`</strong>: 공백 여부

- <strong>`size()`</strong>()요소 수 확인.

## 오류 케이스

- <strong>Underflow</strong>: 빈 큐에서 <code>dequeue</code>.

- <strong>Overflow</strong>: 고정 용량에서 한도를 초과한 <code>enqueue</code>.

## 구현방식

### 단순 배열

- 구현이 간단함
- 인덱스가 정적으로 관리되어 인덱스 활용이 제한적  
  (front와 rear가 오직 증가만 하기 때문에 `dequeue` 연산으로 제거된 인덱스 재사용 불가)

  → <strong>원형 큐</strong>로 보완해 빈 칸을 재활용.

### 원형 큐

- rear와 front를 모듈러 연산(%, mod)으로 관리하여  
  인덱스가 순환하는 구조의 큐

- 인덱스 갱신:  
  rear = `(rear + 1) % capacity`  
  front = `(front + 1) % capacity`

- 크기 계산(현재 원소 개수):  
  size = `(rear - front + capacity) % capacity`

- isEmpty:  
  `size == 0`  
  `rear == front`

- isFull:  
  `size == capacity - 1`  
  `(rear+1) % capacity == front`

  rear == front가 empty와 full을 동시에 충족하므로  
  full인 경우 capacity - 1을 기준으로 삼아 관리하거나  
  size의 값을 추적하는 변수를 따로 관리해야함

### 연결 리스트

<strong>장점</strong>

- 삽입 / 삭제 성능이 좋음 - 데이터 이동이 없음  
  (배열은 원소 제거시 뒤의 원소를 한칸씩 땡겨야함)
- 확장 시 리사이즈 불필요 - 노드 단위 동적 할당  
  (배열은 확장 시 더 큰 배열 생성 + 원소 복사 과정을 거침)
- 배열의 크기를 유연하게 바꿀 수 있어 데이터 개수가 예측 불가능할 때 좋음

<strong>단점</strong>

- 구현이 비교적 복잡함
- 캐시 효율 낮음 - 비연속 메모리
- 메모리 효율 낮음 - 각 노드마다 포인터(next / prev) 저장

## 활용 예

<strong>프로세스 스케줄링</strong>, <strong>윈도우 메시지 큐</strong>.

<strong>캐시/파이프라인</strong>, <strong>BFS</strong>.

## Big-O

<strong>Enqueue / Dequeue / Front</strong>: <strong>O(1)</strong> (원형 배열/연결 리스트 기준).

</details>

<details> <summary><strong>연결 리스트 (Linked List)</strong></summary>

## 정의(ADT)

노드들이 포인터(next[, prev])로 연결된 선형 자료구조.  
배열처럼 연속된 메모리 블록이 아니라, 포인터로 서로 연결되어 있음.

## 구현(DS)

- 단일 연결 리스트(Singly): next만

- 이중 연결 리스트(Doubly): prev/next 모두

- 원형 연결 리스트(Circular): tail.next === head

## 대표 연산

### 삽입 (Insertion)

- 어느 위치에든 새 노드 삽입
- 앞(head)이나 뒤(tail), 노드 사이 등.

### 삭제 (Deletion)

- 특정 위치의 노드 삭제
- 최소한 pop은 필수

### 탐색/순회 (Traversal / Search)

- 특정 값 x를 가진 노드 탐색 (선형 검색)

- 순회(반복자 제공)

### 접근 (Access)

- 특정 위치 노드 값 반환

인덱스 임의 접근은 불가하므로, 특정 지점부터 하나씩 순차적으로 접근해야함

## 특징

- 인덱스 기반 접근 불가능 → 배열보다 검색이 느림

- 배열과 달리 연속 메모리 불필요 → 크기 변경에 유연

- 포인터 저장 오버헤드 발생 → 메모리 효율에 안좋음

- 캐시 친화성 낮음 (비연속 메모리로 인해 약한 지역성)

## 오류 케이스

- 잘못된 포인터 참조: 삭제된 노드 사용 시 런타임 오류

- 메모리 누수: 삭제 시 prev/next 절연(null) 처리 안 할 경우

- 경계 처리: 빈 리스트, head/tail 삭제 시 특별 처리 필요

{ value, next[, prev] }

## 단일 리스트

- 한 방향(next)만 연결 → 구현 단순, 메모리 효율적

- 역방향 탐색 불가

## 이중 리스트

- 양방향(prev/next) 연결 → 앞뒤 탐색·삭제 유리

- 불변식 유지 필요:  
  `x.next.prev === x`  
  `x.prev.next === x`

- 메모리 오버헤드 증가(prev 추가)

## 원형 리스트

- `tail.next === head`: 원형 구조

- sentinel(더미 노드) 또는 size 필드를 두어
  empty / full 상태 판별 및 경계 단순화

## 활용 예

- LRU 캐시: 해시 + 이중 리스트 조합

- 라운드 로빈 스케줄링: 원형 리스트

- 갤러리/Alt+Tab 전환: 순환적 탐색 구조

## Big-O

- 탐색: O(n)

- 삽입/삭제(노드 참조 기반): O(1)

- front/back 삽입/삭제: O(1) (head/tail 참조 유지 시)

## 배열 vs 리스트

배열: 인덱스 기반 랜덤 접근 O(1), 중간 삽입/삭제 O(n)

리스트: 중간 삽입/삭제 O(1) (참조노드 필요), 탐색 O(n)

선택 기준: “빠른 읽기” vs “삽입/삭제 빈도”

</details>

<details><summary>캐시(Cache)</summary>

## 정의

원본보다 지연시간이 낮고(더 “가까운”) 빠른 계층에  
데이터의 복사본을 임시 저장해 재접근을 빠르게 하는 메커니즘.

## 키워드

- 정본이 아님(사본 또는 파생물)
- 원본 경로보다 더 빠른 접근
- 재구성 가능

## 캐시 오염

### 정의

유용한 데이터 대신 불필요한 데이터들이 캐시를 차지해 캐시 성능을 떨어뜨리는 현상.

재사용률이 높은 데이터만 캐시에 저장하도록 캐시 전략을 설정해야함

## 정책

### 빠른 조합(현업에서 자주 쓰는 세트)

API 응답 캐시: Cache-aside + TTL + LRU + singleflight + negative cache

카탈로그/상품: Read-through + 이벤트 무효화 + 버전 키 + Stale-while-revalidate

쓰기 많은 랭킹/카운터: Write-back(+주기적 flush) + TinyLFU(Admission) + 샤딩

### 접근 패턴(읽기/쓰기 전략)

- Cache-aside(=Lazy loading):  
  앱이 캐시 우선 조회  
  캐시 미스 → 원본에서 가져와 캐시에 넣고 반환.  
  단순하고 범용적, 쓰기 · 무효화를 직접 관리해야 함.

- Read-through:  
  앱은 캐시만 호출  
  캐시 미스 → 알아서 원본을 조회해 캐시를 채움.  
  캐시 / 미들웨어에 읽기 경로를 위임하고 싶을 때 적합.

- Write-through:  
  쓰기 요청을 캐시와 원본 모두에 즉시 반영.  
  일관성 관리는 쉽지만 쓰기 성능 이득은 제한적.

- Write-back(=Write-behind):  
  캐시에만 기록 후, 원본은 배치/비동기로 반영.  
  쓰기 성능↑, 장애 시 유실 방지(큐/로그/재시도) 필수.

- Write-around:  
  쓰기는 원본만 갱신, 읽을 때 필요해지면 캐시에 적재.
  일시성 · 단발성 데이터로 캐시 오염 방지.

### 만료·무효화(신선도 정책)

- TTL/Absolute Expiration:  
  저장 시점 기준 고정 만료시간 설정.  
  업데이트 빈도가 낮거나, 약간의 오래된(stale) 값이 허용될 때 사용.

- Sliding Expiration:  
  접근할 때마다 만료시간 연장.  
   자주 쓰는 항목을 오래 유지하고 싶을 때 사용.

- Explicit Invalidation:  
  이벤트 발생 시 지정 키(키/프리픽스/태그)를 즉시 무효화.
  상품가격/게시글 수정 등 변경 즉시 반영해야 할 때 사용.

- Revalidation(검증 후 재사용):  
  원본 변경 여부에 따라 캐시 갱신을 결정.
  원본 부하/전송 비용을 최소화하며 신선도 보장.

- Stale-while-revalidate / Stale-on-error:  
  오래된(stale) 값을 즉시 반환.  
  백그라운드에서 새로고침 / 원본 장애 시 낡은 값 임시 허용.  
  사용자 지연 최소화 + 안정성 향상.

### 교체(Eviction) 정책

- LRU:  
  가장 오래 쓰이지 않은 항목부터 제거.  
  시간 지역성에 강함.

- LFU / TinyLFU:  
  사용 빈도가 낮은 항목 제거.  
  핫 키가 뚜렷하고, 대형 일회성 응답 많은 환경에 적합.

- FIFO / CLOCK / SLRU / ARC:  
  메모리·패턴·구현 난이도에 따라 대안 선택.

### 적재·사전채움(Admission/Prefetch)

- Admission(입장 규칙):  
  크기·비용·빈도 기준으로 캐싱 여부를 결정.  
  한 번 쓰고 버리는 대형 응답으로 인한 캐시 오염 방지.

- Prefetch/Pre-warm:  
  배포/스파이크 전 선적재, 시퀀스 다음 페이지 미리 채움.
  콜드스타트·초기 지연 완화.

- Negative Caching:  
  “존재하지 않음/404/빈 결과”를 짧게 캐시.
  불필요한 원본 조회 폭주 방지.

### 일관성·동기화(Consistency/Cohere­ncy)

- Write-through / Read-your-writes 보장: 같은 클라이언트가 바로 쓴 값을 곧바로 읽게.

- Event-driven Invalidation: DB 변경 이벤트→캐시 무효화(메시지 버스/PubSub).

- 버전 키/해시 키: product:{id}:v{version} 처럼 키에 버전을 포함.
  정확성↑, 키 회전으로 안전한 롤아웃.

### 다층·분산 설계

- L1/L2 캐시: 프로세스 내(in-memory) → 분산 캐시(Redis/Memcached) → CDN/프록시.
  핫 데이터는 가까운 곳(L1)에서 초저지연, L2로 공유률↑.

- 샤딩/Consistent Hashing: 키 분산으로 확장성·평형 유지.

- 복제(Replication): 가용성↑, 읽기 스케일링. 정합성 규칙을 명확히.

- Stampede 방지: 단일 비행(singleflight)/뮤텍스로 동일 키 동시 재생성 차단.

- Jittered TTL / Probabilistic Early Expiration: 만료 시점 분산.

- Circuit Breaker / Backoff: 원본 장애 시 연쇄 실패 차단, 점진적 복구.
</details>
<details> <summary>트리 (Tree)</summary>

## 용어

정점(vertex) = 연결 대상이 되는 개체 또는 위치

간선(Edge) = 정점 간의 연결

인정(Adjacent): 두 정점이 간선으로 직접 연결된 상태

차수(Degree): 정점에 연결된 간선의 수

경로(Path): 간선을 따라 이동하는 순서 (정점들의 나열)

## 정의

루트를 기준으로 한 계층적 구조를 가진 자료구조.  
노드·간선으로 이루어졌으며, 무방향 그래프의 일종이지만  
그래프와 구분되는 명확한 특성을 가짐.

## 그래프와의 차이점

트리는 본질적으로 그래프의 한 종류로, 트리는 사이클 없는 연결 무방향 그래프라고 정의될 수 있지만, 트리만의 용례(예: 이진 탐색 트리, 힙, 트라이 등)를 자주 다루고,
전용 탐색 기법(전위·중위·후위 순회 등)이 개발되는 등의 이유로 독립된 자료구조 명칭으로 자리 잡게됨.

트리만의 뚜렷한 특성 때문에 자료구조에서 그래프와는 구분되어 분류됨.

- 사이클 : 절대 없음
- 연결성: 모든 노드가항상 연결되어 있어야 함
- 간선: 노드 수 N에 대해 간선(edge) 수가 N − 1로 고정
- 경로: 두 노드 사이에 경로가 하나만 존재
- 방향성: 실제 간선은 무방향이지만 탐색에서 중복 방문을 막아 방향성을 부여함

## 구현

### 포인터 기반 트리

각 노드가 직접 자식 노드를 가리키는 포인터/참조를 가짐
Linked List와 비슷한 개념 활용

    class TreeNode {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }

### 인접 리스트 기반 트리

배열 기반으로 트리 구조를 표현  
노드와 연결된 자식 노드를 배열로 저장  
포인터가 아니라 배열 인덱스/값 기반 참조

    const tree = {
      A: ['B', 'C'],
      B: ['D', 'E'],
      C: ['F']
    };

### 이진 탐색 기반 트리

포인터 기반 트리의 특수한 확장형
각 노드가 최대 **2개의 자식(left, right)**만 가짐

- 왼쪽 서브트리: 부모보다 작은 값
- 오른쪽 서브트리: 부모보다 큰 값

위와같은 규칙을 바탕으로 이진 탐색 로직을 구현

<details> <summary>이진 탐색 트리 구현 예시</summary>

    class TreeNode { // 포인터 기반 노드 구현
      constructor(value) {
        this.value = value;
        this.left  = null;
        this.right = null;
      }
    }

    class BinarySearchTree {
      constructor() {
        this.root = null;
      }

      // 삽입 메서드
      insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
          this.root = newNode;
          return;
        }

        let current = this.root;
        while (true) {
          if (value === current.value) {
            // 중복 값 무시하거나 카운터를 둘 수도 있음
            return;
          }

          if (value < current.value) {
            if (!current.left) {
              current.left = newNode;
              return;
            }
            current = current.left;
          } else {
            if (!current.right) {
              current.right = newNode;
              return;
            }
            current = current.right;
          }
        }
      }

      // 재귀 기반 탐색 메서드
      searchRecursive(node, target) {
        if (!node) return null;
        if (node.value === target) return node;
        return target < node.value
          ? this.searchRecursive(node.left, target)
          : this.searchRecursive(node.right, target);
      }

      // 반복 기반 탐색 메서드
      searchIterative(target) {
        let current = this.root;
        while (current) {
          if (current.value === target) return current;
          current = target < current.value ? current.left : current.right;
        }
        return null;
      }
    }

    // 사용 예시
    const bst = new BinarySearchTree();
    [15, 6, 23, 4, 7, 71, 5].forEach(n => bst.insert(n));

</details>

## 시간 복잡도

### 탐색

- 이진 탐색 트리: 평균 O(log N), 최악 O(N)

- 균형 트리(AVL/레드-블랙): O(log N)

### 삽입·삭제

- BST: 평균 O(log N), 최악 O(N)

- 균형 트리: O(log N)

- 순회(전위·중위·후위·레벨): O(N)

## 특징

### 효율적인 계층 구조 표현

부모-자식 링크로 노드 간 명확한 계층 관계 유지  
→ 조직도·파일 시스템 같은 계층적 데이터 처리에 최적화

### 유일한 경로 보장

N−1개의 간선 + 사이클 없음, 루트부터 특정 노드까지 단일 경로 제공  
→ 예측 가능한 탐색 경로 확보

### 다양한 순회 방식 제공

전위·중위·후위·레벨 순회 지원
→ 표현식 트리 평가, 레벨별 배치 처리 등 유연한 응용 시나리오 대응

각 순회 방법은 트리의 노드를 방문하는 순서를 정의함.  
왼쪽 오른쪽은 서브 트리(구현 = 자식 노드 + 재귀)를 의미

- 전위 순회(Pre-order): 루트 → 왼쪽 → 오른쪽
- 중위 순회(In-order): 왼쪽 → 루트 → 오른쪽
- 후위 순회(Post-order): 왼쪽 → 오른쪽 → 루트
- 레벨 순회(Level-order): 레벨(깊이)별 왼쪽 → 오른쪽

### 균형 유지 메커니즘

자동 균형화(self-balancing) 이진 탐색 트리는 삽입·삭제 시점에 트리의 높이를 재조정해  
항상 𝑂(log ⁡𝑁)깊이를 유지하며, 대용량 데이터에서 안정적임  
(AVL·레드-블랙 트리 등)

</details>

<details> <summary>그래프 (Graph)</summary>

## 용어

정점(vertex) = 연결 대상이 되는 개체 또는 위치

간선(Edge) = 정점 간의 연결

인정(Adjacent): 두 정점이 간선으로 직접 연결된 상태

차수(Degree): 정점에 연결된 간선의 수

경로(Path): 간선을 따라 이동하는 순서 (정점들의 나열)

## 정의(ADT)

노드(정점)와 간선(엣지)의 쌍으로 이루어진 자료구조

## 종류

### 방향 여부

- 무방향 그래프: 간선에 방향이 없고 양방향 이동 가능

- 방향 그래프: 간선에 방향이 있어 단방향 이동만 가능

### 가중치 여부

- 가중치 그래프: 간선마다 비용(가중치)을 가짐

- 비가중치 그래프: 모든 간선의 비용이 동일

### 연결성

- 연결 그래프: 모든 노드가 간선을 통해 이어져 있음

- 비연결 그래프: 일부 노드가 다른 노드와 분리되어 있음

## 구현

### 인접 리스트 (Adjacency List)

각 노드마다 연결된 이웃 목록을 저장

정점과 연결된 정점을 표현

메모리 효율이 좋고, 간선 순회가 빠름

    const graph = {
      A: ['B', 'C'],
      B: ['A', 'D'],
      C: ['A', 'D'],
      D: ['B', 'C']
    };

### 인접 행렬 (Adjacency Matrix)

𝑉×𝑉 크기의 2차원 배열로 간선 존재 여부 표시

간선 존재 확인이 𝑂(1)이지만, 메모리 사용량이 크고 전체 순회가 느림

    const V = 4;
    const matrix = Array.from({ length: V }, () => Array(V).fill(0)); // 4x4 행렬 0으로 초기화
    const edges = [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'D']]; // 간선 배열
    edges.forEach(([u, v]) => { // 간선을 인접 행렬에 반영
      const ui = u.charCodeAt(0) - 65; // 알파벳을 0부터 시작하는 인덱스로 변환
      const vi = v.charCodeAt(0) - 65; //  ( 'A'->0, 'B'->1, ...)
      matrix[ui][vi] = matrix[vi][ui] = 1; // ui 노드 ↔ vi 노드로 연결
    });

### 간선 리스트 (Edge List)

간선의 쌍만 저장

정점간 연결만 표현

인접리스트 [A: [B,C], B:[A,C]]  
→ 간선 리스트 [[A,B], [A,C], [B,A], [B,C]]

간단하지만 인접 노드 탐색에 비효율적

    const edgeList = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'D'],
      ['C', 'D']
    ];

## 시간 복잡도

v : 특정 정점 (vertex, 노드)  
e : 그래프 전체의 간선 수  
deg : 해당 정점(노드)의 연결된 간선 수(차수)  
O(deg(v)) : 인접 리스트에서 v의 이웃 탐색 시간

### 간선 추가

- 인접 리스트: O(1)

- 인접 행렬: O(1)

- 간선 리스트: O(1)

### 간선 삭제

- 인접 리스트: O(deg(v))

- 인접 행렬: O(1)

- 간선 리스트: O(E)

### 간선 존재 여부 확인

- 인접 리스트: O(deg(v))

- 인접 행렬: O(1)

- 간선 리스트: O(E)

### 인접 노드 순회

- 인접 리스트: O(deg(v))

- 인접 행렬: O(V)

- 간선 리스트: O(E)

### 전체 간선 순회

- 인접 리스트: O(V + E)

- 인접 행렬: O(V²)

- 간선 리스트: O(E)

### 메모리 사용량

- 인접 리스트: O(V + E)

- 인접 행렬: O(V²)

- 간선 리스트: O(E)

### 그래프 탐색

- 너비 우선 탐색(BFS)

  - 인접 리스트: O(V + E)
  - 인접 행렬: O(V²)
  - 간선 리스트: O(V·E)

- 깊이 우선 탐색(DFS)
  - 인접 리스트: O(V + E)
  - 인접 행렬: O(V²)
  - 간선 리스트: O(V·E)

## 특징

### 복잡한 관계 모델링 가능

- 노드가 간선으로 자유롭게 연결될 수 있는 구조.  
  → 노드 간 직접·간접 연결을 모두 표현할 수 있어  
  계층·네트워크·의존성 등의 복합적 관계 모델링에 유리함.

### 순환 구조(사이클) 허용

- 간선에 제한을 두지 않아 루프를 형성 가능.  
  → 현실 세계의 피드백 루프, 순환 참조, 재귀적 관계 구현.

### 연결 컴포넌트 단위 분리·분석 가능

그래프 > 컴포넌트 > 노드

컴포넌트 = 간선으로 연결된 노드 집합
예) 트리는 단일 컴포넌트로 이루어진 무방향 그래프의 일종

- 하나의 큰 그래프를 컴포넌트 단위로 나눌 수 있음.  
  → 부분 문제의 독립적 처리 및 병렬화에 용이함.

### 가중치 설정으로 다양한 알고리즘 적용

- 간선에 값(가중치)을 부여해 단순 연결 정보뿐만 아니라 다양한 추가 정보를 담을 수 있음  
  → 최단 경로 / 최소 비용 / 최소 거리 등 다양한 알고리즘 활용 가능

</details>
