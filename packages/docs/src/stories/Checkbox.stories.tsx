import type { StoryObj, Meta } from "@storybook/react";
import { Box, Checkbox, CheckboxProps, Text } from "@maby-ui/ui";

export default {
  title: "Form/Checkbox",
  component: Checkbox,

  args: {
    label: "Label example",
  },

  decorators: [
    Story => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
