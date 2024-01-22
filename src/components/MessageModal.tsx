import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

type MessageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  status: 'success' | 'error';
  message: string;
};

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  status,
  message,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="flex items-center justify-center min-h-screen px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
        <h2 className={`text-2xl font-bold mb-4 ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status === 'success' ? 'Sucesso' : 'Erro'}</h2>
        <p className="mb-4">{message}</p>
        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">OK</button>
      </div>
    </Modal>
  );
};

export default MessageModal;