<template>
  <div class="notifications_container">
    <TransitionGroup name="slide-fade">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notification"
      >
        <template v-if="typeof notification.text === 'function'">
          <component :is="notification.text" />
        </template>
        <template v-else>
          <div v-html="notification.text"></div>
        </template>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from "../../composible/notification";

const { notifications } = useNotification();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.notifications_container {
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  z-index: 1000;
}

.notification {
  background-color: $pink-color;
  color: $white;
  padding: 24px;
  border-radius: 16px;

  :deep(a) {
    color: $white;
    text-decoration: underline;
  }
}

.notification_link {
  text-decoration: underline;
  color: $white;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-move {
  transition: transform 0.4s ease;
}
</style>
