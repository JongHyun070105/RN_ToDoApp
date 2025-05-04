# 📝 ToDo App

<div align="center">
  <img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>

## 📋 프로젝트 소개
이 프로젝트는 React Native와 Expo를 사용하여 개발된 간단한 ToDo 애플리케이션입니다. 사용자는 Work와 Travel 카테고리로 할 일을 구분하여 관리할 수 있으며, AsyncStorage를 활용하여 데이터를 로컬에 저장합니다.

## ✨ 주요 기능
### 📌 할 일 추가
- Work와 Travel 카테고리별 할 일 추가
- 텍스트 입력 후 완료 시 자동 저장

### 🗑️ 할 일 삭제
- 각 할 일 항목별 삭제 기능
- 삭제 전 확인 알림 표시

### 💾 데이터 저장
- AsyncStorage를 활용한 로컬 데이터 저장
- 앱 실행 시 자동으로 저장된 데이터 로드

## 🛠️ 기술 스택
<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
        <br>React Native
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
        <br>JavaScript
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png" alt="expo" width="40" height="40"/>
        <br>Expo
      </td>
    </tr>
  </table>
</div>

## 📱 시스템 요구사항
- Node.js 14.0.0 이상
- Expo CLI
- iOS/Android 스마트폰 또는 에뮬레이터

## 🔧 설치 방법
1. 프로젝트를 클론합니다:
```bash
git clone https://github.com/JongHyun070105/RN_ToDoApp.git
```

2. 필요한 의존성을 설치합니다:
```bash
npm install
```

3. 앱을 실행합니다:
```bash
npm start
```

## 📖 사용 방법
1. 앱 실행 후 Work 또는 Travel 카테고리를 선택합니다.
2. 입력창에 할 일을 입력하고 완료 버튼을 누릅니다.
3. 추가된 할 일은 해당 카테고리에서 확인할 수 있습니다.
4. 할 일을 삭제하려면 항목 옆의 휴지통 아이콘을 탭합니다.

## 📁 프로젝트 구조
```
RN_ToDoApp/
├── App.js              # 메인 애플리케이션 컴포넌트
├── color.js            # 테마 색상 정의
├── assets/             # 이미지 및 리소스 파일
├── package.json        # 프로젝트 의존성 관리
└── babel.config.js     # Babel 설정
```

## 📄 라이센스
이 프로젝트는 MIT 라이센스를 따릅니다. 
