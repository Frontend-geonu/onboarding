# 프론트엔드 클론코딩 과제

## 실행 방법

```javascript
// 필요 라이브러리 설치
npm install

// 프로젝트 빌드
npm run build

// 프로젝트 실행
npm run start
```

## 디렉토리 구조

```
├── app.components
│   ├── Button   // 버튼 컴포넌트 공통화
│   ├── loading     //로딩 컴포넌트
│   ├── recommandList          // 추천친구 리스트 컴포넌트
│   ├── resetRecommandList     // 추천친구 새로고침 컴포넌트
│   └── sns         // sns 배너
├── app.feature
│   ├── friend      // 친구찾기 페이지
│   │   └── component
│   │       └── search
│   ├── invite      // 친구초대 페이지
│   │   ├── component
│   │   └── screen
│   ├── ranking     // 랭킹 페이지
│   │   ├── component
│   │   │   ├── recommandFriend
│   │   │   └── user
│   │   └── screen
│   └── request     // 받은요청 페이지
│       └── screen
├── app.hooks   // 커스텀훅
│   └── loadingHook.ts
├── app.styled  // 공통 스타일 변수
│   └── spin.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── base.tsx
│   ├── friend  // 친구추가 페이지
│   └── index.tsx   // 메인 페이지
└── styles
```

## 구현된 부분

- [x] 랭킹페이지
  - [x] "더 많은 친구 보러가기" 클릭 시 추천친구 페이지 넘어가기
  - [x] 새로고침버튼 클릭 시 로딩view 추가
- [x] 친구초대페이지
  - [x] 코드 복사기능
- [x] 받은요청페이지
- [x] 탭바 퍼블리싱
- [x] 화면전환 시 slidein 효과 추가
- [ ] 화면전환 시 slideout 효과 추가

## 미리보기

- 랭킹페이지

  ![image](https://user-images.githubusercontent.com/127822057/225783204-3115a46b-f448-4615-af25-18c1f9db54ef.png)

- 친구초대페이지

  ![image](https://user-images.githubusercontent.com/127822057/225783294-59e8edc5-f588-4077-90a1-9d500327000e.png)

- 받은요청페이지

  ![image](https://user-images.githubusercontent.com/127822057/225783341-0244fd86-ca94-477c-88a1-d032096704c6.png)
