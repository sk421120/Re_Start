# Re_Start
Created with CodeSandbox

React Study

2023.08 ~

## 공식문서 링크
https://react-ko.dev/

### 2023.08.02
1. createRoot, hydrateRoot 샘플코드 실행
 - hydrateRoot(domNode, reactNode, options?)
    
    : 서버 환경에서 React가 이미 만들어둔 HTML에 React를 붙이기    
     (실행된 코드는 hydrate된 루트 컴포넌트 업데이트하기.
      일반적으로 내부 컴포넌트에서 state를 업데이트한다.)
 - 주의점
    
    public/index.html과 src/public/index.html이 구조가 같아야 나온다..
2. 기본 UI 구성하기 (/comps)
 - 컴포넌트

    : 기본 구성 단위, 마크업으로 뿌릴 수 있는 JavaScript 함수
 - import, export
    
    : import와 export하여 컴포넌트 속에 컴포넌트를 넣을 수 있다. 
 - jsx 사용하기

    : javaScript에 마크업 넣기, 로직 + 태그 구성이 가능하다. 기존의 class는 className으로  변환하여 사용 (converter 링크 : https://transform.tools/html-to-jsx)
 - 컴포넌트에 props(매개변수) 전달

   : 컴포넌트에 객체, 배열, 함수 등 모든 javaScript 값을 props로 전달 가능하다. (props 변경X , 상호작용이 필요할 경우 state 설정)

### 2023.08.03
이어서..
 - 조건부 렌더링

   : javaScript 문법으로 조건부 렌더링이 가능하다. 삼항연산자 또는 if문으로 컴포넌트, 태그, 변수 등등
   ( 변수 && true일 경우 => 논리연산자 : true가 아닐경우 아무것도 렌더링 하지 않음. 단, true일 경우 숫자는 X )
 - 목록 렌더링

   : filter(), map() 사용하여 목록을 필터링하거나 배열로 렌더링 가능하다. (꼭 key 값이 있어야함)

   map사용시 {} 가 아닌 ()사용..

   push, pop, reverse, sort / slice, filter, map ([...배열])
 - 컴포넌트 순수성 유지
 
   : 컴포넌트의 용도가 복잡해지지 않도록 props를 적절하거나 컴포넌트 쪼개기..