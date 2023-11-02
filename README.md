# lec4react

> 리액트 학습내용을 업로드하는 저장소입니다.

## 환경
- [Node.js](https://nodejs.org/en/download)
- cmd
> npx create-react-app <프로젝트명(소문자)><br/>
> 설치 에러 시 npm uninstall -g create-react-app<br/>
- VSCode extension : Live Server(Ritwick Dey)
- VSCode extension : ES7 React/Redux/GraphQL/React-Native snippets(rodrigovallades)
- VSCode extension : Tailwind CSS IntelliSense(Tailwind Labs)<br/>
> tailwindcss<br/>
> https://tailwindcss.com/docs/installation<br/>
> React Icons <br/>
> https://react-icons.github.io/react-icons<br/>
> tailwindcss form<br/>
> https://github.com/tailwindlabs/tailwindcss-forms<br/>

## 실행

> npm start<br/>
> 안될 시 npm update 후 npm start
### React 버전 확인

> Open the package.json file in a text editor.<br/>
> Look for the "react-native" key within the "dependencies" section.

### react-router-dom

> npm install react-router-dom

### query-string

> npm install query-string

## 환경변수
[(출처)](https://velog.io/@rmaomina/react-env)
### .env(프로젝트 루트 경로에 생성)
> !!중요!! 홑, 쌍따옴표 없이!!<br/>
> REACT_APP_(변수명)=(변수값)<br/>
> !!중요!! 프론트 서버를 재시작한다!!
### .gitignore
> //# misc 하위<br/>
> .env 추가하기
