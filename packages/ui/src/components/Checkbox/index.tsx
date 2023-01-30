import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { Text } from "../Text";
import {
  CheckboxContainer,
  CheckboxIndicator,
  CheckboxLabelContainer,
} from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  label: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <CheckboxLabelContainer>
      <CheckboxContainer {...rest}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxContainer>
      <Text size={"sm"}>{label}</Text>
    </CheckboxLabelContainer>
  );
}
