import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Target = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, Target)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        Target
      )}
    </Fragment>
  );
};

export default Modal;