const divTest = {
  name: "자바스크립트 사용하기",
  theme: {
    backgroundColor: "black",
    color: "white",
  },
};

export default function Js() {
  return (
    <div style={divTest.theme}>
      <h1>{divTest.name}</h1>
      <p>객체를 생성 후 괄호내에 변수명과 속성을 불러올 수 있다.</p>
    </div>
  );
}
