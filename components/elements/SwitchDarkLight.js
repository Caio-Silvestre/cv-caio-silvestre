import { useEffect, useState } from "react";

export default function SwitchDarkLight() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    console.log(document.body.classList);
    document.body.classList.toggle("sala-dark-scheme", isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`dl-switcher${isOpen ? " sala-dark-scheme" : ""}`}
      >
        <div className="item">
          <span className="state dark" data-text="Dark">
            Dark
          </span>
          <span className="state light" data-text="Light">
            Light
          </span>
        </div>
        <div className="toddler">
          <span className="dark-text">Dark</span>
          <span className="light-text">Light</span>
        </div>
      </div>
    </>
  );
}
