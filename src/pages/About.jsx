import { useRef, useState } from "react";

const tabsData = [
  { id: 1, position: 20 },
  { id: 2, position: 40 },
  { id: 3, position: 49 },
  { id: 4, position: 70 },
  { id: 5, position: 90 },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [position, setPosition] = useState(tabsData[2].position);

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // ----- Tab Click -----
  const handleTabClick = (index) => {
    setActiveIndex(index);
    setPosition(tabsData[index].position);
  };

  // ----- Drag Start/Stop -----
  const startDrag = () => (isDragging.current = true);
  const stopDrag = () => (isDragging.current = false);

  // ----- Drag move -----
  const handleMove = (e) => {
    if (!isDragging.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;

    let percent = (x / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));

    setPosition(percent);
  };

  return (
    <div id="about">
    <div className="about-section">
      <div className="aboutText">
        <div>WHY CHOOSE US</div>

        <h2>Before and afters</h2>

        <div>
          An expert is prosthodontics and geriatrice dental solutions designed{" "}
          <br />
          with a strong focus on individualized paitentcare for all age groups.
        </div>
      </div>
    </div>
      <div className="main-container">
        {tabsData.map((item, index) => {
          // Active tab ki jagah Image
          if (index === activeIndex) {
            return (
              <div
                key="image"
                className="image-container"
                ref={containerRef}
                onMouseMove={handleMove}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
              >
                {/* BEFORE/AFTER TEXT */}
                <span className="label before-label">BEFOR</span>
                <span className="label after-label">AFTER</span>

                {/* BOTTOM IMAGE */}
                <img
                  src="/white.png"
                  alt="White Teeth Image"
                  className="before"
                />

                {/* TOP IMAGE */}
                <img
                  src="/yellow.png"
                  alt="Yellow Teeth Image"
                  className="after"
                  style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                />

                {/* DRAG LINE */}
                <div className="drag-line" style={{ left: `${position}%` }}>
                  <div className="drag-btn" onMouseDown={startDrag}>
                    DRAG
                  </div>
                </div>
                
              </div>
            );
          }

          // NORMAL TABS
          return (
            <div
              key={item.id}
              className="tab"
              onClick={() => handleTabClick(index)}
            >
              <span className="tab-text">BEFORE & AFTER</span>
              <span className="tab-number">{item.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
