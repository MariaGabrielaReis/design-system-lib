import { ComponentProps } from "react";
import { Text } from "../Text";
import {
  TooltipContainer,
  TooltipTrigger,
  TooltipArrow,
  TooltipContent,
} from "./styles";

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  triggerElement: JSX.Element;
  content: string;
}

export function Tooltip({ triggerElement, content, ...props }: TooltipProps) {
  return (
    <TooltipContainer modal={true}>
      <TooltipTrigger>{triggerElement}</TooltipTrigger>

      <TooltipContent side={"top"} {...props}>
        <Text>{content}</Text>
        <TooltipArrow />
      </TooltipContent>
    </TooltipContainer>
  );
}

Tooltip.displayName = "Tooltip";
