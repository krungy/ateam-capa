<h1>ATEAM-CAPA</h1>

## 🚀 배포

🔗 **배포**(heroku): https://ateam-capa.herokuapp.com/ <br>

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/krungy/ateam-capa.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 프로젝트 root 폴더에 `.env` 파일을 생성하고 아래 내용을 작성합니다.
   ```bash
   REACT_APP_API_URL=http://localhost:3001
   ```
4. 아래 커맨드로 json-server를 구동합니다.
   ```bash
   yarn json-server
   ```
5. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```

<br>

## 🧰 기술 스택 및 구현 사항

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)

## 📚 전체 구현사항

- 고객의 선택에 맞는 요청서를 보여주는 페이지를 구현합니다.
- 팀 프로젝트로 구현했던 과제를 조금 수정하여 다시 구성해보았습니다.
  - 두 개의 Button 컴포넌트(Button, ResetButton)를 확장성 고려하여 하나의 컴포넌트로 압축시켰습니다.
  - 색상을 가능한 모듈화하여 한번에 관리하게 수정했습니다.
  - 옵션에 사용된 리스트를 constant로 관리하였습니다.
  - 기존 Select 컴포넌트를 최소한의 기능 단위로 쪼개어 나누었습니다. (Icon, Option, Select)

### 요구사항

#### 견적 요청 카드

- [x] : API 데이터를 받아와서 데이터를 통해 화면에 렌더링
  - [x] : 프로젝트명, 요청한 고객사, 고객의 희망 납기일, 요청한 제품 총 수량
  - [x] : 가공방식은 타입 지정을 통해 선택
- [x] : 요청 내역 버튼, 채팅하기 버튼
- [x] : 카드 전체 영역에 hover 시에 보더 스타일

#### 필터링

- [x] : 가공 방식 필터가 선택되면, 해당 방식 조건이 포함된 카드를 모두 노출
- [x] : 재료 필터가 선택되면, 해당 재료 조건이 포함된 카드를 모두 노출
- [x] : 가공 방식과 재료 필터가 둘 다 선택되면, 두 조건의 교집합 노출
- [x] : 선택 박스 hover 시 보더 스타일
- [x] : 선택 박스 hover 시 option 목록 노출
- [x] : option 선택 시 선택 박스와 옵션의 체크박스 스타일 변경 및 개수 표시
- [x] : 필터링 리셋 버튼 클릭 시 필터 초기화

#### 토글

- [x] : 클릭 시 스타일 변경 및 활성화 표시
- [x] : 토글 활성화 시 상담중인 카드만 노출

#### 빈화면

- [x] : 조건에 맞는 카드가 없을 시 기본 화면 노출

#### 모바일

- [x] : 반응형 Navbar
- [x] : 햄버거 버튼 클릭 시 메뉴 화면 노출

## 📂 디렉토리 구조

```bash
.
├── api
├── assets
│   └── images
├── components
│   ├── base
│   │   ├── Button
│   │   ├── Icon
│   │   ├── Option
│   │   ├── Toggle
│   └── domain
│       ├── DefaultContainer
│       ├── ItemCard
│       ├── Navigation
│       └── Select
├── constants
├── styles
└── types
```
