<template>
  <div class="cart">
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
            @removeFromCart="RemoveFromCart"
          >
          </ProductCard>
        </div>

        <div v-else class="cart_empty">Корзина пуста</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductCard } from "~/types/products";
import { useCartStore } from "~/store/cart";
import { useNotification } from "~/composible/notification";

const cartStore = useCartStore();
const { addNotification } = useNotification();

const RemoveFromCart = (product: ProductCard) => {
  cartStore.removeProduct(product);
  addNotification("Товар удален из корзины");
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.cart {
  flex-grow: 1;
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
  font-size: 24px;
  text-align: center;
  color: $gray-color;
}

.cart_list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
