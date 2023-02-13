import { UserForm } from "./components/UserForm";
import { ReviewForm } from "./components/ReviewForm";
import { Steps } from "./components/Steps";
import { Finish } from "./components/Finish";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import { useState } from "react";
import { useForm } from "./Hooks/useForm";

import "./styles/app.css";

interface FormFields {
  name: string;
  email: string;
  review: string;
  comment: string;
}

const initialForm: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(initialForm);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Finish data={data} />,
  ];

  const showData = () => {
    console.log(data)
  }

  const {
    currentComponent,
    currentStep,
    changesStep,
    isLastStep,
    isFirstStep,
  } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changesStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => changesStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <GrFormNext />
                <span>Avançar</span>
              </button>
            ) : (
              <button type="button" onClick={showData}>
                <FiSend />
                <span>Finalizar</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
