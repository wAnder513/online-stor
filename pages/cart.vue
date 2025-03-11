<template>
  <div class="cart">
    <main class="cart_main">
      <div class="cart_content">
        <div class="cart_headers">
          <h1 class="cart_header">Header 1</h1>
          <h2 class="cart_header">Header 2</h2>
          <h3 class="cart_header">Header 3</h3>
        </div>

        <div class="cart_products">
          <div v-if="cartItems.length > 0" class="cart_list">
            <ProductCard
              v-for="item in cartItems"
              :key="item.id"
              :product="item"
              @add-to-cart="removeFromCart"
            />
          </div>

          <div v-else class="cart_empty">Корзина пуста</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { ProductCard } from "~/types/products";

const cartItems = ref<ProductCard[]>([]);

const removeFromCart = (product: ProductCard) => {
  const index = cartItems.value.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.cart {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.cart_main {
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.cart_content {
  display: flex;
  gap: 2rem;
}

.cart_headers {
  width: 33.333333%;
}

.cart_header {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.cart_products {
  width: 66.666667%;
}

.cart_empty {
  text-align: center;
  color: $gray-color;
}

.cart_list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
