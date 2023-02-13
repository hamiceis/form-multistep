import "./index.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

interface FisishProps {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />, 
}

export function Finish({ data }: FisishProps) {
  return (
    <div className="finish-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opnião é muito importante, em breve você recebará um cupom 10% de
        desconto para a sua próxima compra.
      </p>
      <p>Para concluír sua avaliação clique no botão de enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
}
