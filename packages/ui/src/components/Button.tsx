import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "0 $4",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$teal700",

        "&:not(:disabled):hover": {
          backgroundColor: "$teal600",
        },

        "&:disabled": {
          backgroundColor: "$gray600",
        },
      },
      secondary: {
        color: "$teal500",
        border: "2px solid $teal600",

        "&:not(:disabled):hover": {
          backgroundColor: "$teal500",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },
      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "#white",
          backgroundColor: "$gray700",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 32,
      },
      md: {
        height: 40,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
