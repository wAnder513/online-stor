// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@typescript-eslint/semi": ["error", "always"],
    semi: ["error", "always"],
  },
});
