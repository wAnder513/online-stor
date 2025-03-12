<template>
  <header class="header shadow-md">
    <div class="container header_content">
      <NuxtLink to="/" class="header_brand">Brand Name</NuxtLink>
      <NuxtLink to="/cart" class="header_cart">
        <div class="header_cart_icon">
          <NuxtImg class="header_cart-icon-img" :src="cartIcon" alt="Корзина" />
        </div>
        <span class="header_cart_count">
          {{ cartItemsCount }}
        </span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from "../../store/cart";
import { getCartItemsCountString } from "../../helpers";
import { computed } from "vue";
import cartIcon from "../../assets/image/cart-icon.svg";

const cartStore = useCartStore();

const cartItemsCount = computed(() =>
  getCartItemsCountString(cartStore.products.length)
);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: $white;
  z-index: 50;

  .header_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header_brand {
    font-size: 32px;
    font-weight: 700;
    text-decoration: none;
    color: $text-color;
  }

  .header_cart {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: $text-color;

    .header_cart_icon {
      position: relative;

      .header_cart-icon-img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
