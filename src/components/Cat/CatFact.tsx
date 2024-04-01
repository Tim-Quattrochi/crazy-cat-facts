import "./catFact.css";

interface CatFactProps {
  showNextCat: () => void;
  catFact: string;
}

export function CatFact({ showNextCat, catFact }: CatFactProps) {
  const handleClick = () => {
    showNextCat();
  };

  return (
    <div className="cat-container">
      <span className="info">{catFact}</span>
      <button className="btn" onClick={handleClick}>
        Next 😻
      </button>
    </div>
  );
}
