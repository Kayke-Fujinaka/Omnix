import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input id="cep" type="cep" placeholder="Insira seu CEP" autoComplete="off" />
);

export const Default = Template.bind({});
Default.args = {
  id: "cep",
  name: "cep",
  type: "text",
  placeholder: "Insira seu CEP",
};
