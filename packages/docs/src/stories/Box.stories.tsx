import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@maby-ui/ui";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: <Text>Box element</Text>,
  },

  argTypes: {
    children: {
      description: "Element that will be displayed inside the box",
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
