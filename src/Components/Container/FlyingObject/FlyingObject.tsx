import { useEffect, useState } from "react";

interface FlyingObjectProps {
  objectSizeMin: number;
  objectSizeMax: number;
  color: string;
}

export default function FlyingObject({
  objectSizeMin,
  objectSizeMax,
  color,
}: FlyingObjectProps) {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [objectSize, setObjectSize] = useState(100);

  const randomLocation = () => {
    const maxX = window.innerWidth - objectSize;
    const maxY = window.innerHeight - objectSize;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ top: randomY, left: randomX });
    setObjectSize(Math.random() * objectSizeMax + objectSizeMin);
  };

  useEffect(() => {
    randomLocation();

    const intervalTime = setInterval(randomLocation, 4000);

    return () => clearInterval(intervalTime);
  }, []);

  return (
    <div
      className="flyingObj"
      style={{
        ...position,
        width: `${objectSize}px`,
        height: `${objectSize}px`,
        transition: "top 2s ease, left 2s ease, width 2s ease, height 2s ease",
        backgroundColor: color,
      }}
    ></div>
  );
}
