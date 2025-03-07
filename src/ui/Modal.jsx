import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(<div className="overlay">{children}</div>, document.body);
}

export default Modal;
