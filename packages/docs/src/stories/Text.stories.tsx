import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@maby-ui/ui";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: "Example text",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
