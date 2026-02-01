import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCard from './BaseCard.vue'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  args: {
    title: 'Weekly summary',
    subtitle: 'Your projects are trending upward.',
    padding: 'md',
    tone: 'primary',
  },
  argTypes: {
    padding: { control: 'radio', options: ['sm', 'md', 'lg'] },
    tone: { control: 'radio', options: ['neutral', 'primary'] },
  },
}

export default meta

type Story = StoryObj<typeof BaseCard>

export const WithContent: Story = {
  render: (args) => ({
    components: { BaseCard, BaseButton },
    setup: () => ({ args }),
    template: `
      <BaseCard v-bind="args">
        <p style="margin: 0 0 1rem; color: #475569;">
          You closed 12 tasks this week and shipped two releases.
        </p>
        <BaseButton label="View report" />
      </BaseCard>
    `,
  }),
}

export const Neutral: Story = {
  args: { tone: 'neutral' },
}
