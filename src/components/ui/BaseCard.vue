<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(151, 175, 16, 0.911);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  color: rgba(151, 175, 16, 0.911);
}
</style>