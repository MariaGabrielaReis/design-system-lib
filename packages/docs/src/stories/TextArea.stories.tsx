import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@maby-ui/ui";

export default {
  title: "Form/Text Area",
  component: TextArea,

  decorators: [
    Story => {
      return (
        <Box
          as={"label"}
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Label</Text> {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "placeholder example",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
