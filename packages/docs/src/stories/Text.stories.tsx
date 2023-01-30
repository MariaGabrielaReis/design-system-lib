import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@maby-ui/ui";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: "Example text",
    size: "md",
  },

  argTypes: {
    children: {
      description: "Text that will be displayed as text",
      control: {
        type: "text",
      },
    },
    size: {
      description:
        "Text sizes: extra small, small, medium, large, extra large...",
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
