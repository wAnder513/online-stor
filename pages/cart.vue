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
          <div v-if="cartStore.products.length > 0" class="cart_list">
            <ProductCard
              v-for="product in cartStore.products"
              :key="product.id"
              :product="product"
            >
              <template #footer>
                <button
                  class="product_button"
                  @click="() => removeFromCart(product)"
                >
                  Удалить из корзины
                </button>
              </template>
            </ProductCard>
          </div>

          <div v-else class="cart_empty">Корзина пуста</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { ProductCard } from "~/types/products";
import { useCartStore } from "~/store/cart";

const cartStore = useCartStore();

const removeFromCart = (product: ProductCard) => {
  cartStore.removeProduct(product);
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
  // max-width: 1200px;
  margin: 0 auto;
  margin: 42px 0;
}

.cart_content {
  width: 100%;
  display: flex;
  gap: 32px;
}

.cart_headers {
  width: calc(25% - 16px);
  min-width: 160px;
}

.cart_header {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.cart_products {
  width: calc(75% - 16px);
}

.cart_empty {
  text-align: center;
  color: $gray-color;
}

.cart_list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
