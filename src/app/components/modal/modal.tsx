import React from "react";
import css from "./modal.module.css";

interface Props {
  active: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ active, onClose, children }) => {
  return (
    <>
      {active && (
        <>
          <div className={css.backdrop} onClick={onClose} />
          <div className={css.modal}>
            <button onClick={onClose} className={css.close}>
              X
            </button>
            {children}
          </div>
        </>
      )}
    </>
  );
};
