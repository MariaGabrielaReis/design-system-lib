import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@maby-ui/ui";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/mariagabrielareis.png",
    alt: "Maria Gabriela Reis",
  },

  argTypes: {
    src: {
      description: "Image link (address or path) to show as avatar",
      control: {
        type: "text",
      },
    },
    alt: {
      description:
        "Alternative text when has something wrong with the image link",
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
