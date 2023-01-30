import type { StoryObj, Meta } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@maby-ui/ui";

export default {
  title: "Form/MultiStep",
  component: MultiStep,

  args: {
    steps: 4,
    currentStep: 1,
  },

  argTypes: {
    steps: {
      description: "Number of steps that will be displayed",
      control: {
        type: "number",
      },
    },
    currentStep: {
      description: "Number of current step",
      control: {
        type: "number",
        min: 0,
      },
    },
  },

  decorators: [
    Story => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};
