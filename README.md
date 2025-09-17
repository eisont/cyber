# Cyber
> React 기반의 DummyJSON 프로젝트  

---

## 🚀 주요 기능
- **메인 페이지**: 배너 및 상품 노출  
- **카테고리 페이지**: 카테고리별 상품 조회  
- **검색 기능**: 키워드 기반 상품 검색  
- **상품 상세정보**: 상세 페이지 + 장바구니 담기  
- **유저 선택**: 사용자 전환 가능  
- **마이페이지**: 기본 정보 조회  

---

## 🛠️ 기술 스택
- **Frontend**: React  
- **상태 관리**: Redux, Redux Toolkit  
- **스타일링**: Emotion  
- **데이터 패칭**: Axios  
- **빌드 툴**: Vite  

---

## 📂 폴더 구조
```bash
src
 ┣ pages/                 # 페이지 단위 컴포넌트
 ┃ ┣ Category/            # 카테고리 페이지
 ┃ ┃ ┣ ui/                # 카테고리 전용 UI
 ┃ ┃ ┣ Filter/            
 ┃ ┃ ┗ ProductItemDetail/ 
 ┃ ┣ Mypage/              # 마이페이지
 ┃ ┗ SelectUser/          # 유저 선택
 ┃
 ┣ ui/                    # 공용 UI 컴포넌트
 ┃ ┣ CategoryHighlight/
 ┃ ┣ CategoryPromoBanner/
 ┃ ┣ HeroBanner/
 ┃ ┣ SeasonalSaleBanner/
 ┃ ┣ ProductGrid/
 ┃ ┣ ProductItem/
 ┃ ┣ ProductsBox/
 ┃ ┗ SearchProducts/
 ┃
 ┣ shared/                # 공용 모듈
 ┃ ┣ assets/              # 이미지, 아이콘, 폰트
 ┃ ┣ hooks/               # 커스텀 훅
 ┃ ┣ layout/              # 레이아웃(Header, Footer)
 ┃ ┗ lib/                 # 유틸 함수
 ┃
 ┣ redux/                 # 전역 상태 관리
 ┣ monks/                 # 테스트/더미 데이터
 ┣ Layout.jsx             # 전체 레이아웃
 ┣ main.jsx               # 엔트리 포인트
```
---
## ⚙️ 설치 및 실행
```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```
---
## 📸 스크린샷
<img width="600" alt="mainpage" src="https://github.com/user-attachments/assets/7729f3cf-a795-4891-a538-3f67afb58de8" />
<img width="500" alt="categorypage" src="https://github.com/user-attachments/assets/15bb4aed-941a-4c1f-ba4c-1b0818fa0e4b" />
<img width="500" alt="productdetail" src="https://github.com/user-attachments/assets/88e09292-53e8-4ccd-b1cd-80fd0a2aa9c2" />
<img width="500" alt="search" src="https://github.com/user-attachments/assets/abeaeea5-1fe2-4bc4-a042-c26f0d4c0a4b" />
<img width="500" alt="userselect" src="https://github.com/user-attachments/assets/7e104f15-1ce2-4e12-9b88-79bf5c2ca44f" />
<img width="500" alt="mypage" src="https://github.com/user-attachments/assets/2317798a-77be-44f1-bc8b-f165275ae7a3" />
<img width="500" alt="cart" src="https://github.com/user-attachments/assets/54d48a81-16ab-4ed2-a2d6-d9b2ffdf0b82" />

---
## 🧪 버전 관리

* develop → main 브랜치 전략 사용
* v1.0.0 배포: 메인, 카테고리, 검색, 상품 상세, 유저 선택, 마이페이지 구현
---
## 🌐 배포 링크

>추후 추가 예정
---
## 📌 향후 계획

- 무한 스크롤 적용
- 반응형 웹 (모바일/태블릿/데스크탑) 개선
- 장바구니 UX 개선


---
