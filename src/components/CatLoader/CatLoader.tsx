import "./catLoader.css";
export function CatLoader() {
  return (
    <div className="container">
      <div className="plane">
        <div className="p-body">
          <div className="p-parts">
            <div className="part-one">
              <span className="po-up"></span>
              <span className="po-middle"></span>
              <span className="po-down"></span>
            </div>
            <div className="part-two">
              <span className="pt-wing"></span>
            </div>
            <div className="part-three">
              <span className="roll"></span>
            </div>
            <div className="helix">
              <span className="h-base"></span>
              <span className="h-rotor"></span>
            </div>
          </div>

          <div className="cat">
            <span className="eyes left"></span>
            <span className="eyes right"></span>
            <span className="mouth"></span>
          </div>
        </div>

        <div className="p-message">
          <div className="rope"></div>
          <ul>
            <li>Meow!</li>
            <li className="middle">Purr</li>
            <li>Meow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
