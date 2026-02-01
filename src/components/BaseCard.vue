<script setup lang="ts">
type Props = {
  title?: string;
  subtitle?: string;
  padding?: "sm" | "md" | "lg";
  tone?: "neutral" | "primary";
};

const props = withDefaults(defineProps<Props>(), {
  title: "Card title",
  subtitle: "Short supporting text goes here.",
  padding: "md",
  tone: "neutral",
});
</script>

<template>
  <section :class="['card', `card--${padding}`, `card--${tone}`]">
    <header class="card__header">
      <h3 class="card__title">{{ title }}</h3>
      <p v-if="subtitle" class="card__subtitle">{{ subtitle }}</p>
    </header>
    <div class="card__body">
      <slot>
        <p class="card__placeholder">Drop content here.</p>
      </slot>
    </div>
  </section>
</template>

<style scoped>
.card {
  border-radius: 20px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.card--neutral {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.card--primary {
  background: linear-gradient(145deg, #e0f2fe 0%, #ffffff 60%);
  border-color: rgba(14, 116, 144, 0.2);
}

.card--sm {
  padding: 1rem;
}

.card--md {
  padding: 1.5rem;
}

.card--lg {
  padding: 2rem;
}

.card__header {
  margin-bottom: 1rem;
}

.card__title {
  margin: 0;
  font-size: 1.15rem;
  color: #0f172a;
}

.card__subtitle {
  margin: 0.35rem 0 0;
  color: #475569;
  font-size: 0.95rem;
}

.card__body {
  color: #0f172a;
}

.card__placeholder {
  margin: 0;
  color: #64748b;
}
</style>
