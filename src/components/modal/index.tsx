import React, { MouseEvent } from 'react';

import './styles.scss';

interface IModalProps {
  id?: string;
  onClose(): void;
}

const Modal: React.FC<IModalProps> = ({ id = "modal", onClose = () => {}, children }) => {

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    onClose();

  };

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
