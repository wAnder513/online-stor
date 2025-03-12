<template>
  <div class="product">
    <div class="product_image_wrapper">
      <NuxtImg
        :src="product.image"
        :alt="product.name"
        class="product_image"
        :placeholder="[50, 25]"
      />
      <div v-if="product.oldPrice" class="product_discount">
        {{ differencePricePercent }}
      </div>
    </div>

    <div class="product_content">
      <div class="product_price">
        <span class="product_price_current">{{
          formatPrice(product.newPrice)
        }}</span>
        <span v-if="product.oldPrice" class="product_price_old">{{
          formatPrice(product.oldPrice)
        }}</span>
      </div>
      <h3 class="product_title">{{ product.name }}</h3>
      <p class="product_description">{{ product.description }}</p>
    </div>

    <button
      class="product_button"
      @click="() => removeFromCart(product)"
      v-if="hasInCart"
    >
      Удалить
    </button>

    <button class="product_button" @click="() => addToCart(product)" v-else>
      В корзину
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ProductCard } from "~/types/products";
import { useCartStore } from "~/store/cart";

const cartStore = useCartStore();

const props = defineProps<{
  product: ProductCard;
}>();

const emit = defineEmits<{
  (e: "addToCart", product: ProductCard): void;
  (e: "removeFromCart", product: ProductCard): void;
}>();

const differencePricePercent = computed(() => {
  if (!props.product.oldPrice) return 0;
  return `-${Math.round(
    ((props.product.oldPrice - props.product.newPrice) /
      props.product.oldPrice) *
      100
  )}%`;
});

const hasInCart = computed(() => {
  return cartStore.hasInCart(props.product);
});

const addToCart = (product: ProductCard) => {
  emit("addToCart", product);
};

const removeFromCart = (product: ProductCard) => {
  emit("removeFromCart", product);
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss" as *;

.product {
  max-width: 200px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);

    .product_button {
      opacity: 1;
    }
  }
}

.product_button {
  width: max-content;
  background-color: $text-color;
  color: $white;
  padding: 12px 24px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  border: none;
}

.product_image_wrapper {
  width: 200px;
  height: 200px;
  position: relative;

  .product_image {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
}

.product_discount {
  position: absolute;
  bottom: 8px;
  left: 8px;
  background-color: $white;
  color: $pink-color;
  padding: 3px 6px;
  border-radius: 4px;
}

.product_content {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.product_price {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.product_price_current {
  font-size: 16px;
  font-weight: 700;
}

.product_price_old {
  font-size: 12px;
  color: $gray-color;
  text-decoration: line-through;
}

.product_title {
  font-size: 12px;
  font-weight: bold;
}

.product_description {
  color: $text-color;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 12px;
  font-size: 14px;
}
</style>
