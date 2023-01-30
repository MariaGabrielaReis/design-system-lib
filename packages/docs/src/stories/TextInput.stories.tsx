import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@maby-ui/ui";

export default {
  title: "Form/Text Input",
  component: TextInput,

  args: {
    disabled: false,
    placeholder: "Placeholder example",
    prefix: "prefix/",
  },

  argTypes: {
    disabled: {
      description: "TextInput state: if it is enabled or disabled",
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      description: "Text that will be displayed as input placeholder",
      control: {
        type: "text",
      },
    },
    prefix: {
      description:
        "Text that will be displayed before input content and placeholder",
      control: {
        type: "text",
      },
    },
  },

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

export const Primary: StoryObj<TextInputProps> = {};
