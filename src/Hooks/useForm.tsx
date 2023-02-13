import { FormEvent, ReactElement, useState } from "react";

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0)

  const changesStep = (indexComponent: number, e?: FormEvent) => {
    if(e) e.preventDefault();
    
    if(indexComponent < 0 || indexComponent >= steps.length) return;
    setCurrentStep(indexComponent)
  }

  return {
    currentStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false, 
    currentComponent: steps[currentStep],
    changesStep,
  }
}