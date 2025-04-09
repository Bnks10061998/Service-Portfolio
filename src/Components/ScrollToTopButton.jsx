import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <FaArrowUp color="white" />
        </button>
      )}

      <style>{`
        .scroll-to-top-btn {
          background-color: #00287A;
          position: fixed;
          bottom: 30px;
          right: 30px;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          z-index: 1000;
          border: none;
          transition: background-color 0.3s ease;
        }

        .scroll-to-top-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default ScrollToTopButton;
