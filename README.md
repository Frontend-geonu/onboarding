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
│   ├── bigButton   // 버튼 컴포넌트 공통화
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
