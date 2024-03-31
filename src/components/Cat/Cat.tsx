import { Dispatch, SetStateAction } from "react";
import { Cats } from "../../App";
import "./cat.css";

interface CatProps {
  text: string;
  setShowNext: Dispatch<SetStateAction<boolean>>;
  showNextCat: () => void;
  cat?: Cats | undefined;
}

export function Cat({
  text,
  setShowNext,
  showNextCat,
  cat,
}: CatProps) {
  const handleClick = () => {
    setShowNext((prev) => !prev);
    showNextCat();
  };

  return (
    <div className="cat-container">
      <span className="info">{text}</span>
      <button className="btn" onClick={handleClick}>
        Next 😻
      </button>
    </div>
  );
}
