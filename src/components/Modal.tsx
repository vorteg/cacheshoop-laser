import React from 'react';
import './Modal.css'; // Asegúrate de importar tus estilos CSS
import { Img } from 'react-image';
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  // selectedImage: { url: string; public_id: string } | null;
}

const Modal: React.FC<ModalProps> = ( { showModal, closeModal } ) => {
  return (
    <div className={`modal ${showModal ? 'active' : ''}`} onClick={closeModal}>
      <div className="modal-content" onClick={( e ) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <Img src="logo.webp" alt="Logo" className="logo" />
        <p>Ofrecemos servicios de corte y grabado láser de alta calidad.</p>
        <ul>
          <li>Trabajamos con MDF</li>
          <li>Grabado en termos</li>
          <li>Diseños personalizados</li>
          <li>Venta a menudeo y mayoreo</li>
        </ul>
        <a href="https://www.instagram.com/cacheshoop" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/3318444445" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Modal;
