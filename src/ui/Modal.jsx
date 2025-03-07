import { cloneElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          onClose();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );

  return createPortal(
    <div className="overlay">
      <div className="modal styled-modal fade show">
        {cloneElement(children, { ref: ref })}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
