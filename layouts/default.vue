<template>
  <div class="layout">
    <TheHeader />

    <main class="layout_wrapper">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout_wrapper {
  max-width: 1360px;
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>
