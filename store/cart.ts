import { defineStore } from "pinia";
import type { ProductCard } from "~/types/products";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const products = ref<ProductCard[]>([]);

  const addProduct = (product: ProductCard) => {
    products.value.push(product);
  };

  const removeProduct = (product: ProductCard) => {
    products.value = products.value.filter((p) => p.id !== product.id);
  };

  const hasInCart = (product: ProductCard) => {
    return products.value.some((p) => p.id === product.id);
  };

  return {
    products,
    addProduct,
    removeProduct,
    hasInCart,
  };
});
