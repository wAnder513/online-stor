<template>
  <div class="index">
    <main class="index_main">
      <NuxtLink to="/catalog" class="index_link"> Перейти в каталог </NuxtLink>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.index {
  position: absolute;
  top: calc(50% - 60px);
  bottom: 50%;
  right: 0;
  left: 0;
}

.index_main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.index_link {
  font-size: 32px;
  color: $purple-color;
  transition: color 0.3s;
}
</style>
