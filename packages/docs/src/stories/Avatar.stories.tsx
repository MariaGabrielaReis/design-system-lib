import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@maby-ui/ui";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/mariagabrielareis.png",
    alt: "Maria Gabriela Reis",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
