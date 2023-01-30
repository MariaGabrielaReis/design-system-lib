import type { StoryObj, Meta } from "@storybook/react";
import { Text, Tooltip, TooltipProps } from "@maby-ui/ui";

export default {
  title: "Data display/Tooltip",
  component: Tooltip,

  args: {
    triggerElement: <Text>Text example</Text>,
    content: "Tooltip example",
  },

  argTypes: {
    triggerElement: {
      description: "Element that opens tooltip when is clicked",
      control: {
        type: null,
      },
    },
    content: {
      description: "Text that will be displayed inside the tooltip",
      control: {
        type: "text",
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
