import { useImmer } from "use-immer";
import { useState } from "react";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function UpdateSt() {
  const [shape, updateShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    let tmpX = shape.position.x + dx;
    let tmpY = shape.position.y + dy;
    if (tmpX >= 150) {
      tmpX = 150;
    } else if (tmpX < 0) {
      tmpX = 0;
    }

    if (tmpY >= 150) {
      tmpY = 150;
    } else if (tmpY < 0) {
      tmpY = 0;
    }

    updateShape((draft) => {
      draft.position.x = tmpX;
      draft.position.y = tmpY;
    });
  }

  function handleColorChange(e) {
    updateShape((draft) => {
      draft.color = e.target.value;
    });
  }

  return (
    <div
      style={{
        width: 250,
        height: 250,
      }}
    >
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      ></Box>
    </div>
  );
}

function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
            ${position.x}px,
            ${position.y}px
          )`,
      }}
    >
      {children}
    </div>
  );
}

function Background({ position }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
        width: 250,
        height: 250,
        border: "1px solid gray",
        backgroundColor: "lightgray",
      }}
    />
  );
}
