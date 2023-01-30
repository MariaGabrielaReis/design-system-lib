import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@maby-ui/ui";

export default {
  title: "Form/Text Area",
  component: TextArea,

  args: {
    disabled: false,
    placeholder: "Placeholder example",
  },

  argTypes: {
    disabled: {
      description: "TextArea state: if it is enabled or disabled",
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      description: "Text that will be displayed as text area placeholder",
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
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};
