/*
1. 컴포넌트의 다양한 시각적 상태 식별하기
 - 상태 시각화
2. 상태 변경의 원인 파악하기
 - state의 변경 원인 ( 입력 등등 )
3. 메모리 상태를 useState로 표현하기
 - 메모리에서 컴포넌트의 시각적 상태 표현
4. 불필요한 state 변수 제거하기
 - 처리와 표시가 겹치지 않도록..
5. 이벤트 핸들러를 연결하여 state 설정하기
 - 이벤트에 의해 state의 값이 설정
*/
export default function InputSt({ tab, setTab }) {
  return (
    <div>
      <ul className="tabWrap">
        <li className={tab === "com" ? "on" : ""} onClick={() => setTab("com")}>
          UI 구성
        </li>
        <li className={tab === "int" ? "on" : ""} onClick={() => setTab("int")}>
          상호작용
        </li>
        <li className={tab === "mng" ? "on" : ""} onClick={() => setTab("mng")}>
          state관리
        </li>
      </ul>
    </div>
  );
}
