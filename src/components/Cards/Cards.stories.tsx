import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Cards } from ".";

export default {
  title: "Components/Cards",
  component: Cards,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => (
  <Cards {...args} />
);

export const Default = Template.bind({});
Default.args = {
    plan: "Mensal",
    price: "R$ 1000,00",
  };