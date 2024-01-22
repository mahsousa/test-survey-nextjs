import { NextPage } from 'next';

interface ButtonsSendProps {
  onSendFakePost: () => void;
  onSendError: () => void;
  onSendSuccess: () => void;
}

const ButtonsSend: NextPage<ButtonsSendProps> = ({onSendFakePost, onSendError, onSendSuccess}) => {
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="text-center">
        <button onClick={onSendFakePost} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-md">
          Enviar Fake Post
        </button>
        <button onClick={onSendError} className="bg-red-500 text-white px-4 py-2 m-2 rounded-md">
          Enviar Erro
        </button>
        <button onClick={onSendSuccess} className="bg-green-500 text-white px-4 py-2 m-2 rounded-md">
          Enviar Sucesso
        </button>
      </div>
    </div>
  );
};

export default ButtonsSend;
