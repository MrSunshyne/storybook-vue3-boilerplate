// CSF 3
import type { Meta, StoryObj } from '@storybook/vue3';

import PatientCard from '../components/PatientCard.vue';

const meta: Meta<typeof PatientCard> = { component: PatientCard };

export default meta;
type Story = StoryObj<typeof PatientCard>;

export const Primary: Story = { args: { description: 'Primary' } };
export const Secondary: Story = { args: { description: 'Secondary' } };
export const Another: Story = { args: { description: 'Another' } };