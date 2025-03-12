<template>
  <div class="layout">
    <TheHeader />

    <main class="layout_wrapper">
      <slot />

      <TheNotification />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/common/TheHeader.vue";
import TheFooter from "~/components/common/TheFooter.vue";
import TheNotification from "~/components/common/TheNotification.vue";
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout_wrapper {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>
