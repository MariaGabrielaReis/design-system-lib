import * as Checkbox from "@radix-ui/react-checkbox";
import { styled, keyframes } from "../../styles";

export const CheckboxLabelContainer = styled("label", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$2",
});

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$black",
  borderRadius: "$xs",
  border: "2px solid $black",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  '&[data-state="checked"]': {
    backgroundColor: "$teal600",
  },

  "&:focus, &[data-state='checked']": {
    border: "2px solid $teal600",
  },
});

const zoomIn = keyframes({
  from: { transform: "scale(0)" },
  to: { transform: "scale(1)" },
});

const zoomOut = keyframes({
  from: { transform: "scale(1)" },
  to: { transform: "scale(0)" },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",

  '&[data-state="checked"]': {
    animation: `${zoomIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${zoomOut} 200ms ease-out`,
  },
});
