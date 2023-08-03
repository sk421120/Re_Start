const checkList = [
  {
    name: "귀엽다.",
    check: true,
  },
  {
    name: "성격이 다양하다.",
    check: true,
  },
  {
    name: "높은 곳을 좋아한다.",
    check: false,
  },
  {
    name: "경계할 때 그르릉 소리를 낸다.",
    check: false,
  },
];

export default function CndtRender({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <CheckV1 checkList={checkList[0]} />
        <CheckV2 checkList={checkList[1]} />
        <CheckV3 checkList={checkList[2]} />
        <CheckV1 checkList={checkList[3]} />
      </ul>
    </div>
  );
}

function CheckV1({ checkList }) {
  return (
    <li>
      {checkList.name}
      {checkList.check ? " ✔" : ""}
    </li>
  );
}

function CheckV2({ checkList }) {
  return (
    <li>
      {checkList.name}
      {checkList.check && " ✔"}
    </li>
  );
}

function CheckV3({ checkList }) {
  let name = checkList.name;

  if (checkList.check) {
    name += " ✔";
  }

  return <li>{name}</li>;
}
