import type { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";
import { Button, ButtonProps } from "@maby-ui/ui";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Button label",
    variant: "primary",
    size: "md",
    disabled: false,
  },

  argTypes: {
    children: {
      description: "Text that will be displayed inside the button",
      control: {
        type: "text",
      },
    },
    variant: {
      description: "Button variants: filled, unfilled and text only",
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      description: "Button sizes: small or medium",
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      description: "Button state: if it is enabled or disabled",
      control: {
        type: "boolean",
      },
    },
    onClick: {
      description: "Button action: show log when clicked",
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Label
        <ArrowRight weight="bold" />
      </>
    ),
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};
