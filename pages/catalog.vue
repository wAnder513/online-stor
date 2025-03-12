<template>
  <div class="catalog">
    <main class="catalog_main">
      <h1 class="catalog_title">Тестовая задача</h1>

      <div class="catalog_grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        >
          <template #footer>
            <button class="product_button" @click="() => AddToCart(product)">
              В корзину
            </button>
          </template>
        </ProductCard>
      </div>
    </main>

    <div
      v-if="showNotification"
      class="catalog_notification shadow-md"
      :class="{ catalog_notification_hidden: !showNotification }"
    >
      Товар добавлен в
      <NuxtLink to="/cart" class="catalog_notification_link">корзину</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateFakeProduct } from "~/utils/generate";
import { useCartStore } from "~/store/cart";
import type { ProductCard } from "~/types/products";
const cartStore = useCartStore();

const products = ref(Array.from({ length: 12 }, () => generateFakeProduct()));

const showNotification = ref(false);

const AddToCart = (product: ProductCard) => {
  cartStore.addProduct(product);

  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.catalog {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.catalog_main {
  flex-grow: 1;
}

.catalog_title {
  font-size: 30px;
  font-weight: 700;
  margin: 32px 0 24px;
}

.catalog_grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 110px;
}

.catalog_notification {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: $primary-color;
  color: $white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: opacity 0.3s;

  .catalog_notification_hidden {
    opacity: 0;
  }
}

.catalog_notification_link {
  text-decoration: underline;
  color: $white;
}
</style>
