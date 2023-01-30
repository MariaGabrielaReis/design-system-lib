import { MultiStepContainer, Label, Steps, Step } from "./styles";

export interface MultiStepProps {
  steps: number;
  currentStep?: number;
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {steps}
      </Label>
      <Steps css={{ "--steps-number": steps }}>
        {Array.from({ length: steps }, (_, index) => index + 1).map(step => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = "MultiStep";
