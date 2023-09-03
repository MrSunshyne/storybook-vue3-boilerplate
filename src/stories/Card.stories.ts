// CSF 3
import type { Meta, StoryObj } from '@storybook/vue3';

import Card from '@components/Card.vue';

const meta: Meta<typeof Card> = {
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = { args: { description: 'Primary' } };
export const Secondary: Story = { args: { description: 'Secondary' } };
export const Another: Story = { args: { description: 'Another' } };