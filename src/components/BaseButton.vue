<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{ (e: 'click', event: MouseEvent): void }>()

const classes = computed(() => [
  'btn',
  `btn--${props.variant}`,
  `btn--${props.size}`,
  props.disabled ? 'is-disabled' : null,
])

function onClick(event: MouseEvent) {
  if (props.disabled) return
  emit('click', event)
}
</script>

<template>
  <button :class="classes" :type="type" :disabled="disabled" @click="onClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn {
  --btn-bg: #1053f0;
  --btn-fg: #e41616;
  --btn-border: #ec28d5;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid var(--btn-border);
  background: var(--btn-bg);
  color: var(--btn-fg);
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    background 120ms ease;
}

.btn:focus-visible {
  outline: 3px solid #38bdf8;
  outline-offset: 2px;
}

.btn:active {
  transform: translateY(1px);
}

.btn--sm {
  font-size: 0.85rem;
  padding: 0.35rem 0.85rem;
}

.btn--md {
  font-size: 0.95rem;
  padding: 0.55rem 1.1rem;
}

.btn--lg {
  font-size: 1.05rem;
  padding: 0.75rem 1.35rem;
}

.btn--outline {
  --btn-bg: transparent;
  --btn-fg: #0f172a;
  --btn-border: #0f172a;
}

.btn--ghost {
  --btn-bg: transparent;
  --btn-fg: #0f172a;
  --btn-border: transparent;
}

.btn--ghost:hover {
  background: rgba(15, 23, 42, 0.06);
}

.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>
