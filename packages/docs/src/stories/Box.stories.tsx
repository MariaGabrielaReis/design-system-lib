import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@maby-ui/ui";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: (
      <>
        <span>Box element</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
