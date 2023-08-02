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