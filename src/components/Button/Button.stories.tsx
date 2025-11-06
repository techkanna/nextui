import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    isLoading: { control: "boolean" },
  },
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
export const Loading: Story = { args: { isLoading: true } };


