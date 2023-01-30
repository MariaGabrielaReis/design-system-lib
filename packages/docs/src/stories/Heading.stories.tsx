import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@maby-ui/ui";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Example title",
    size: "md",
    as: "h2",
  },

  argTypes: {
    children: {
      description: "Text that will be displayed as heading",
      control: {
        type: "text",
      },
    },
    size: {
      description: "Heading sizes: small, medium, large, extra large...",
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      control: {
        type: "select",
      },
    },
    as: {
      description:
        "Heading tag: if necessary you can change the heading tag to 'h1', 'h2', 'h3'...",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
