import React, { useEffect, useState } from "react";

function BackTop() {
  const [backtop, setBackTop] = useState(0);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 700) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);
  return (
    <>
      <section>
        <div>
          {" "}
          <button
            id="btn"
            onClick={() => top()}
            style={{ zIndex: "99" }}
            className={
              backtop
                ? "  d-block position-fixed btn_goto_top_pos bottom-0 mb-2  "
                : "d-none  "
            }
          >
            gotop
          </button>{" "}
        </div>
      </section>
    </>
  );
}

export default BackTop;
