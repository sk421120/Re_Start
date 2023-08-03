const animals = [
  {
    id: "0",
    kind: "dog",
    type: "Welsh Corgi",
    memo: "이중털을 가지고 있다. 귀여운만큼 털이 많이 빠진다. (웨일스 귀염둥이)",
  },
  {
    id: "1",
    kind: "dog",
    type: "Labrador Retriever",
    memo: "시각장애인 안내견으로 잘 알려진 견종. 물놀이도 매우 좋아한다.",
  },
  {
    id: "2",
    kind: "cat",
    type: "Korean shorthair",
    memo: "한국 고양이.. 귀여워..",
  },
  {
    id: "3",
    kind: "cat",
    type: "British Shorthair",
    memo: "넓은 머리와 둥근 얼굴, 짧고 굵은 목이 특징이다.",
  },
  {
    id: "4",
    kind: "cat",
    type: "American shorthair",
    memo: "단모종으로 쥐잡이용이였던 만큼 활동성이 높다.",
  },
  {
    id: "4",
    kind: "dog",
    type: "Papillon",
    memo: "나비모양의 귀가 특징이다. 낯가림이 적고 사교성이 좋은편이다.",
  },
];

// const dogList = animals.filter((animal) => animal.kind === "dog");
// const catList = animals.filter((animal) => animal.kind === "cat");

let dogList = [];
let catList = [];

animals.forEach((animal) => {
  if (animal.kind === "dog") {
    dogList.push(animal);
  } else {
    catList.push(animal);
  }
});

export default function RenderList() {
  return (
    <>
      <h2>🐕</h2>
      <ul>
        <Animals animalList={dogList} />
      </ul>
      <h2>🐈</h2>
      <ul>
        <Animals animalList={catList} />
      </ul>
    </>
  );
}

function Animals({ animalList }) {
  const listItems = animalList.map((animal) => (
    <li key={animal.id}>
      <p>
        <b>{animal.type}</b> : {animal.memo}
      </p>
    </li>
  ));
  return <>{listItems}</>;
}
