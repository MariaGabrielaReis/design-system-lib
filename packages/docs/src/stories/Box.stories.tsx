import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@maby-ui/ui";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: <Text>Box element</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
