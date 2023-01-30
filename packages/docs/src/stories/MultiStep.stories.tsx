import type { StoryObj, Meta } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@maby-ui/ui";

export default {
  title: "Form/MultiStep",
  component: MultiStep,

  args: {
    steps: 4,
    currentStep: 1,
  },

  decorators: [
    Story => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
