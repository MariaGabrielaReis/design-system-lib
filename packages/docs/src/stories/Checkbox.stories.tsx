import type { StoryObj, Meta } from "@storybook/react";
import { Box, Checkbox, CheckboxProps, Text } from "@maby-ui/ui";

export default {
  title: "Form/Checkbox",
  component: Checkbox,

  args: {
    label: "Label example",
  },

  argTypes: {
    label: {
      description: "Text that will be displayed to the left of the checkbox",
      control: {
        type: "text",
      },
    },
  },

  decorators: [
    Story => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
