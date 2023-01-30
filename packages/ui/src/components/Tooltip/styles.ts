import * as Popover from "@radix-ui/react-popover";
import { styled, keyframes } from "../../styles";

export const TooltipContainer = styled(Popover.Root, {});

export const TooltipTrigger = styled(Popover.Trigger, {
  border: 0,
  backgroundColor: "transparent",
});

export const TooltipArrow = styled(Popover.Arrow, {
  height: "$2",
  width: "$4",
  fill: "$teal700",
  backgroundColor: "transparent",
});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const TooltipContent = styled(Popover.Content, {
  border: 0,
  borderRadius: "$sm",
  padding: "$2 $4",
  minWidth: 100,
  maxWidth: 200,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "$white",
  backgroundColor: "$teal700",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",

  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});
