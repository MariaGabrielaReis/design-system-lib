import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$gray800",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray800",

  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  display: "flex",
  alignItems: "baseline",

  "&:focus": {
    outline: 0,
    borderColor: "$teal300",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType;
}

TextArea.displayName = "TextArea";
