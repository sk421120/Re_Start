export default function ResEvnt() {
  function testClick() {
    alert("아침은 늘 졸립다.");
  }

  return (
    <>
      <div>
        <TestButtonV1 onClickEvnt={testClick} />
        <TestButtonV2
          onClickEvnt={() => {
            alert("아침이라 졸려");
          }}
          title="버튼!"
        />
        <TestButtonV3>굿모닝..</TestButtonV3>
      </div>
      <div className="ToolBar" onClick={() => alert("이거슨 툴바")}>
        <IndiButtonV1>어라..?</IndiButtonV1>
        <IndiButtonV2>되겠지</IndiButtonV2>
      </div>
    </>
  );
}

function TestButtonV1({ onClickEvnt }) {
  return <button onClick={onClickEvnt}>click!</button>;
}

function TestButtonV2({ onClickEvnt, title }) {
  return <button onClick={onClickEvnt}>{title}</button>;
}

function TestButtonV3({ children }) {
  return (
    <button onClick={() => alert(`${children} 하하..`)}>{children}</button>
  );
}

function IndiButtonV1({ children }) {
  return <button onClick={() => alert(`${children}??`)}>{children}</button>;
}

function IndiButtonV2({ children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        alert(`${children}!!!`);
      }}
    >
      {children}
    </button>
  );
}
