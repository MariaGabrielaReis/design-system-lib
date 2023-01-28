import type { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";
import { Button, ButtonProps } from "@maby-ui/ui";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Button label",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Label <ArrowRight weight="bold" />{" "}
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
