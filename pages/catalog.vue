<template>
  <div class="catalog">
    <div class="catalog_main">
      <h1 class="catalog_title">Тестовая задача</h1>

      <ClientOnly>
        <div v-if="products && products.length > 0" class="catalog_grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @addToCart="AddToCart"
            @removeFromCart="RemoveFromCart"
          />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import { NuxtLink } from "#components";
import { useCartStore } from "~/store/cart";
import type { ProductCard } from "~/types/products";
import { useNotification } from "~/composible/notification";
import { apiPath } from "~/utils/api";

const { data } = await useFetch(apiPath.products);

const products = computed(() => (Array.isArray(data.value) ? data.value : []));

const cartStore = useCartStore();
const { addNotification } = useNotification();

const AddToCart = (product: ProductCard) => {
  cartStore.addProduct(product);
  addNotification(() =>
    h("div", {}, [
      "Товар добавлен в ",
      h(NuxtLink, { to: "/cart" }, () => "корзину"),
    ])
  );
};

const RemoveFromCart = (product: ProductCard) => {
  cartStore.removeProduct(product);
  addNotification("Товар удален из корзины");
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

.catalog_notification-link {
  color: $white;
}
</style>
