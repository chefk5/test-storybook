import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  title: 'Components/BaseButton',
  tags: ['autodocs'],
  component: BaseButton,
  args: {
    label: 'Get started',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'outline', 'ghost'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    click: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof BaseButton>

export const Primary: Story = {}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Large: Story = {
  args: { size: 'lg' },
}
