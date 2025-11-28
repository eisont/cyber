# Cyber

> React + Vite 기반의 DummyJSON 프로젝트

---

## 🚀 주요 기능

- **메인 페이지**: 배너 및 상품 리스트 노출
- **Explore 페이지**: 카테고리별 상품 조회, 레시피 조회
- **검색 기능**: 키워드 기반 상품 검색
- **상품 상세정보**: 상세 페이지 + 장바구니 담기
- **유저 선택**: 사용자 전환 기능
- **마이페이지**: 기본 정보 조회
- **로딩 UI**: Suspense + Skeleton 적용
- **에러 처리**: 서버 오류 시 전용 에러 화면 노출
- **모달 기능**: 삭제 확인 및 사용자 피드백 제공

---

## 🛠️ 기술 스택

- **Frontend**: React
- **상태 관리**: Redux, Redux Toolkit
- **스타일링**: Emotion
- **데이터 패칭**: Axios
- **빌드 툴**: Vite
- **라우팅**: React Router DOM
- **성능 최적화**: `lazy`, `Suspense`, `memo`, `useCallback`, `useMemo`

---

## 🧹 코드 스타일 & 품질 관리

- **Lint**: ESLint (`@typescript-eslint`, `eslint-config-prettier`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **포맷팅**: Prettier + `prettier-plugin-tailwindcss`
- **Git Hooks**: Husky (pre-commit 등 훅으로 lint/format 연동 가능)
- **커밋 컨벤션**: Commitlint + `@commitlint/config-conventional` (Conventional Commits 규칙 기반)

---

## 📂 폴더 구조

````bash
src
 ┣ app/
 ┃ ┗ router/               # 라우터 설정
 ┃   ┗ App.jsx
 ┣ pages/                  # 페이지 단위 컴포넌트
 ┃ ┣ Explore/              # 상품/레시피 탐색 페이지
 ┃ ┃ ┣ Detail/             # 상세 보기 페이지
 ┃ ┃ ┣ ui/                 # Explore 전용 UI
 ┃ ┃ ┣ Explore.styled.js
 ┃ ┃ ┗ index.jsx
 ┃ ┣ Mypage/               # 마이페이지
 ┃ ┣ Recipes/              # 레시피 페이지
 ┃ ┣ SearchProducts/       # 검색 결과 페이지
 ┃ ┗ SelectUser/           # 유저 선택 페이지
 ┃
 ┣ redux/                  # 전역 상태 관리
 ┣ shared/                 # 공용 모듈
 ┃ ┣ assets/               # 이미지, 아이콘, 폰트
 ┃ ┣ hooks/                # 커스텀 훅 (useFetch, useIntersectionObserver 등)
 ┃ ┣ layout/               # Header, Footer 등 공용 레이아웃
 ┃ ┣ lib/                  # 유틸 함수 (ToUpper, OriginalPrice 등)
 ┃ ┣ mock/                 # Mock / 테스트 데이터
 ┃ ┗ ui/                   # 공용 UI 컴포넌트 (ProductGrid, ProductItem 등)
 ┃
 ┗ main.jsx                # 진입 파일

## ⚙️ 설치 및 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# ESLint 검사
npm run lint

# 코드 포맷팅 (Prettier)
npm run format

---

## 📸 스크린샷

<img width="600" alt="main" src="https://github.com/user-attachments/assets/ae22e383-ddcf-4acf-a75f-fb00b83cb35d" />
<img width="600" alt="explore" src="https://github.com/user-attachments/assets/705651aa-c09f-41a4-a44b-b4c74b1a8b32" />
<img width="600" alt="productdetail" src="https://github.com/user-attachments/assets/e72add03-ce1f-400d-aec6-6241c15469e2" />
<img width="600" alt="search" src="https://github.com/user-attachments/assets/15c1363f-8bc8-42e9-83d7-e07c544e5449" />
<img width="600" alt="recipes" src="https://github.com/user-attachments/assets/1132efbe-6365-48f4-a2d2-51f3dc6803c0" />
<img width="600" alt="modal" src="https://github.com/user-attachments/assets/df1176a7-fa68-44ab-8c5a-24e821c5e56f" />
<img width="600" alt="userselect" src="https://github.com/user-attachments/assets/0e3e6bf1-b698-44d0-a65f-4cbc1cc7dbf0" />
<img width="600" alt="user" src="https://github.com/user-attachments/assets/776f5e12-773d-42df-8bb3-43d2664b53cd" />
<img width="600" alt="cart" src="https://github.com/user-attachments/assets/bf025764-36fa-4c9a-96e3-a22371205331" />

---

## 🧪 버전 관리

    •	브랜치 전략: develop → main
	•	현재 버전: v1.0.0
	•	구현 범위:
	•	메인
	•	Explore(카테고리/레시피)
	•	검색
	•	상품 상세
	•	유저 선택
	•	마이페이지
	•	UI/UX 개선:
	•	lazy/Suspense
	•	Skeleton
	•	Modal
	•	Error Boundary

---

## 🌐 배포 링크

> 추후 추가 예정

---

## 📌 향후 계획

- 무한 스크롤 적용
- 반응형 웹 (모바일/태블릿/데스크탑) 개선
- 장바구니 UX 개선

---
````
