import { faker } from "@faker-js/faker";
import type { Product } from "~/types/products";

export const generateFakeProduct = (): Product => {
  const hasOldPrice = Math.random() < 0.5;
  const newPrice = faker.commerce.price({ min: 100, max: 100000 });
  const oldPrice = hasOldPrice ? Number(newPrice) * 1.35 : undefined;

  return {
    image: faker.image.url(),
    newPrice: Number(newPrice),
    oldPrice: oldPrice ? Number(oldPrice) : undefined,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    url: path.products + "/" + faker.number.int({ min: 10, max: 10000 }),
    description: "Цветные наклейки на клавиши пианино, для более лучшей игры",
  };
};
