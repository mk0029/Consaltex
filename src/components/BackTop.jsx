import React, { useEffect, useState } from "react";
import gotop from "../assets/img/Png/add-back-to-top-button-manually-wordpress-removebg-preview.png";
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
          <span
            id="btn"
            onClick={() => top()}
            style={{ zIndex: "99" }}
            className={
              backtop
                ? "  d-block position-fixed btn_goto_top_pos bottom-0 mb-2  "
                : "d-none  "
            }
          >
            <img
              className="gotop bg_primery border-0"
              src={gotop}
              alt=" Go-to-Top"
            />
          </span>{" "}
        </div>
      </section>
    </>
  );
}

export default BackTop;
