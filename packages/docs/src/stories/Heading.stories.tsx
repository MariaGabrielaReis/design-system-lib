import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@maby-ui/ui";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Example title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const PageTitle: StoryObj<HeadingProps> = {
  args: {
    children: "Example page title",
    as: "h1",
  },
};
