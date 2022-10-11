import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Label } from ".";

export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Insira o seu CEP para prosseguir',
  htmlFor: "cep"
};