import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@maby-ui/ui";

export default {
  title: "Form/Text Input",
  component: TextInput,

  decorators: [
    Story => {
      return (
        <Box
          as={"label"}
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"sm"}>Label</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "placeholder example",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "prefix/",
  },
};
