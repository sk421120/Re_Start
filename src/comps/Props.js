export default function Props() {
  return (
    <Card>
      <Avatar
        size={200}
        dog={{
          name: "corgi",
          imageId: "FRK6meX",
        }}
      />
      <p>컴포넌트 속에 컴포넌트 속에 컴포넌트 속에 컴포넌트...</p>
    </Card>
  );
}

function getImageUrl(dog) {
  return "https://i.imgur.com/" + dog.imageId + ".png";
}

function Avatar({ dog, size }) {
  return (
    <>
      <img
        className="avatar"
        src={getImageUrl(dog)}
        alt={dog.name}
        width={size}
        height={size}
      />
      <p>{dog.name}</p>
    </>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
